// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  //const query = req.query.q;
  
  //const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${query}&key=AIzaSyCzk-JfyXIBWhyOHauIEBW7KYigkabbGRk`);
  //const items = response.json().items;
  const items = [
    {
        "kind": "youtube#searchResult",
        "etag": "IFGYz5NbNUP3AMipgPdbfm0FHlw",
        "id": {
            "kind": "youtube#video",
            "videoId": "kWOGwZE6OI0"
        },
        "snippet": {
            "publishedAt": "2022-08-16T15:50:11Z",
            "channelId": "UCqSlg9XDMTcNofm85Vw2tBg",
            "title": "DRAFTKINGS &amp; FANDUEL MLB PICKS TODAY (8-16-22) DFS 6 PACK",
            "description": "DRAFTKINGS AND FANDUEL MLB DFS PICKS FOR TODAY (TUESDAY) from RotoGrinders Expert Stephen Young aka ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/kWOGwZE6OI0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/kWOGwZE6OI0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/kWOGwZE6OI0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "RotoGrinders - Daily Fantasy Sports Advice",
            "liveBroadcastContent": "none",
            "publishTime": "2022-08-16T15:50:11Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "OykFXyG-7BX7s25x46EA54t7Ryo",
        "id": {
            "kind": "youtube#video",
            "videoId": "Urx87-NMm6c"
        },
        "snippet": {
            "publishedAt": "2022-03-29T02:24:40Z",
            "channelId": "UCzDJwLWoYCUQowF_nG3m5OQ",
            "title": "Depth-first search in 4 minutes",
            "description": "Depth-first search in 4 minutes. Code: https://github.com/msambol/youtube/blob/master/search/depth_first_search.py Sources: 1.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Urx87-NMm6c/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Urx87-NMm6c/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Urx87-NMm6c/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Michael Sambol",
            "liveBroadcastContent": "none",
            "publishTime": "2022-03-29T02:24:40Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "sci6LBVSWF-Qb961-VKiUBVIUIc",
        "id": {
            "kind": "youtube#video",
            "videoId": "pcKY4hjDrxk"
        },
        "snippet": {
            "publishedAt": "2018-02-24T10:47:25Z",
            "channelId": "UCZCFT11CWBi3MHNlGf019nw",
            "title": "5.1 Graph Traversals - BFS &amp; DFS -Breadth First Search and Depth First Search",
            "description": "Breadth First Search Depth First Search PATREON : https://www.patreon.com/bePatron?u=20475192 Courses on Udemy ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/pcKY4hjDrxk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/pcKY4hjDrxk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/pcKY4hjDrxk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Abdul Bari",
            "liveBroadcastContent": "none",
            "publishTime": "2018-02-24T10:47:25Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "gYspR0OKV14LfOCynxGB49LNRzc",
        "id": {
            "kind": "youtube#video",
            "videoId": "7fujbpJ0LB4"
        },
        "snippet": {
            "publishedAt": "2018-04-01T11:00:00Z",
            "channelId": "UCD8yeTczadqdARzQUp29PJw",
            "title": "Depth First Search Algorithm | Graph Theory",
            "description": "Depth First Search (DFS) algorithm explanation Support me by purchasing the full graph theory course on Udemy which includes ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/7fujbpJ0LB4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/7fujbpJ0LB4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/7fujbpJ0LB4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "WilliamFiset",
            "liveBroadcastContent": "none",
            "publishTime": "2018-04-01T11:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "FD5I85RcQAnX7cSLtv6RD33qheA",
        "id": {
            "kind": "youtube#video",
            "videoId": "jxQuQnKihlA"
        },
        "snippet": {
            "publishedAt": "2022-08-16T16:07:30Z",
            "channelId": "UCBUUOH0LmDuWii7zBV7SKrQ",
            "title": "MLB DFS Strategy: Fantasy Baseball Lineups, DraftKings &amp; FanDuel Fantasy Baseball Picks 8/16/22",
            "description": "Stokastic DFS baseball experts Greg Ehrenberg and Adam Scherer kick off the slate by breaking down the late-breaking news ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/jxQuQnKihlA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/jxQuQnKihlA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/jxQuQnKihlA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Stokastic DFS - Daily Fantasy Sports Advice",
            "liveBroadcastContent": "none",
            "publishTime": "2022-08-16T16:07:30Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "m2GI7zagojoJ_WzGjs78Zp9eQ7c",
        "id": {
            "kind": "youtube#video",
            "videoId": "CFEzKhemltE"
        },
        "snippet": {
            "publishedAt": "2022-08-16T12:00:07Z",
            "channelId": "UCbeBLVa8ZaTvry2GqDbucEA",
            "title": "MLB DraftKings Picks + FanDuel Picks 8/16/2022",
            "description": "MLB DraftKings Picks + FanDuel Picks 8/16/2022: https://www.draftdashboard.com/freetrial Top MLB DFS Picks for Today ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/CFEzKhemltE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/CFEzKhemltE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/CFEzKhemltE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Draft Dashboard",
            "liveBroadcastContent": "none",
            "publishTime": "2022-08-16T12:00:07Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "npxcAMYT8pve6we6sT6FahZYUP8",
        "id": {
            "kind": "youtube#video",
            "videoId": "2BvvjCa6sZ8"
        },
        "snippet": {
            "publishedAt": "2022-08-16T13:29:54Z",
            "channelId": "UCBUUOH0LmDuWii7zBV7SKrQ",
            "title": "DFS Process Today | Comparing 150-max Ownership | Daily Fantasy Tuesday 8/16 | DraftKings",
            "description": "Josh Engleman is back with The Daily Fantasy Process! Today, Josh looks at the PGA DFS contests on DraftKings for the BMW ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/2BvvjCa6sZ8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/2BvvjCa6sZ8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/2BvvjCa6sZ8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Stokastic DFS - Daily Fantasy Sports Advice",
            "liveBroadcastContent": "none",
            "publishTime": "2022-08-16T13:29:54Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "YaS0ugkbMrlSAn5CYkBTvD5NXqo",
        "id": {
            "kind": "youtube#video",
            "videoId": "PMMc4VsIacU"
        },
        "snippet": {
            "publishedAt": "2020-07-05T19:01:45Z",
            "channelId": "UCK8XIGR5kRidIw2fWqwyHRA",
            "title": "Depth First Search (DFS) Explained: Algorithm, Examples, and Code",
            "description": "In this video, I explain the fundamental ideas behind the Depth First Search (DFS) graph algorithm. We first introduce the concept ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PMMc4VsIacU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PMMc4VsIacU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PMMc4VsIacU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Reducible",
            "liveBroadcastContent": "none",
            "publishTime": "2020-07-05T19:01:45Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "HzfbaL7hmAbDO3JTcLEG1Bnf1bM",
        "id": {
            "kind": "youtube#video",
            "videoId": "G2s9uCyIj0s"
        },
        "snippet": {
            "publishedAt": "2022-08-16T16:41:59Z",
            "channelId": "UC2iBCJvx03Ppy4DrjguSfQA",
            "title": "DFS Core Plays - 2022 BMW Championship Draftkings Golf Picks: Top GPP Plays Priced $8,000+",
            "description": "In this version of my weekly PGA Tour video, I cover The 2022 BMW Championship and my top 6 picks for GPPs on Draftkings ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/G2s9uCyIj0s/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/G2s9uCyIj0s/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/G2s9uCyIj0s/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Gsluke dfs",
            "liveBroadcastContent": "none",
            "publishTime": "2022-08-16T16:41:59Z"
        }
    }
  ];
  res.status(200).json({ items })
}
