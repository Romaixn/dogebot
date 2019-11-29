const fetch = require('node-fetch');

function request(source, site, nsfw=true) {
  return new Promise(
    function(resolve, reject) {
      let date = Date.now();
      switch (source) {
        case "reddit": 
          if(!site) reject({reason: "No subreddit supplied", message: "Couldn't do request because there wasn't a subreddit"});

          function ExtractRedditUrl(body, tries) {
            if(tries >= 10) return reject({reason: "retry limit exceeded", message: "Failed to find a suitable post", subreddit: site});
            tries++;
            // grabs a random post 
            let post = body[Math.floor(Math.random() * body.length)].data;

            //check if the post url ends with an image extention
            switch((/(\.jpg|\.png|\.gif|\.jpeg)$/ig).test(post.url)) {
              case true:
                let payload = {
                  url: post.url,
                  source: post.permalink,
                  nsfw: nsfw,
                  tries: tries,
                  time: `${((Date.now() - date) / 1000).toFixed(2)}s`
                };
                resolve(payload);
              break;
              default:
                switch(post.is_video) {
                  case true:
                    ExtractRedditUrl(body, tries);
                  break;
                  default:
                    switch(post.media) {
                      case null:
                        ExtractRedditUrl(body, tries);
                      break;
                      default:
                        switch(post.media.oembed.thumbnail_url.includes("gfycat")) {
                          case false:
                            let payload = {
                              url: post.media.oembed.thumbnail_url,
                              source: post.permalink,
                              nsfw: nsfw,
                              tries: tries,
                              time: `${((Date.now() - date) / 1000).toFixed(2)}s`
                            };
                            resolve(payload);
                          break;
                          default: ExtractRedditUrl(body, tries);
                        }
                      break;
                    }
                  break;
                }
              break;
            }
          }

          let sortBy= ['best', 'new', 'top', 'hot'], filter = sortBy[Math.floor(Math.random() *sortBy.length)];
          let url = `https://reddit.com/r/${site}/${filter}.json?limit=15`;

          fetch(url).then(async response => {
            try {
              let body = await response.json();

              if(response.status !== 200) reject(body);
              ExtractRedditUrl(body.data.children, 0);
            } catch(error) {
              reject(error);
            }
          }).catch(error => {
            reject(error);
          });
        break;

        default:
          reject(new Error(`Unknow source '${source}'`));
        break;
      }
    }
  )
}

module.exports.makeRequest = request;
