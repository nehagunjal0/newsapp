import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Denny Jacob",
      title:
        "Kohl’s Outlook Suggests Tough Holiday Period - The Wall Street Journal",
      description: "For 2024, Kohl’s now expects sales to decline 7%-8%",
      url: "https://www.wsj.com/business/retail/kohls-3q-sales-decline-new-2024-outlook-suggests-tough-holiday-period-7b5818ce",
      urlToImage: "https://images.wsj.net/im-08273871/social",
      publishedAt: "2024-11-26T17:39:00Z",
      content: null,
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Kerry Breen",
      title:
        "Fugitive on FBI's Most Wanted Terrorists list arrested in U.K. - CBS News",
      description:
        "Daniel Andreas San Diego was indicted more than 20 years ago in connection with two 2003 bombings.",
      url: "https://www.cbsnews.com/news/fbi-most-wanted-terrorists-arrested-daniel-andreas-san-diego/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2024/11/26/68e1e420-6c6d-4378-bb28-402be4e95cbf/thumbnail/1200x630/43c80b4dfa15ca5657c8ac57d56ec4a9/screenshot-2024-11-26-at-11-49-57-am.png?v=e3aa8b4a58817620ee227c79202c9709",
      publishedAt: "2024-11-26T17:35:22Z",
      content:
        "Daniel Andreas San Diego, one of the FBI's most wanted terror suspects, has been arrested in Wales, U.S. authorities said Tuesday.\r\nThe FBI said it coordinated with U.K. authorities to arrest San Die… [+1985 chars]",
    },
    {
      source: {
        id: null,
        name: "Billboard",
      },
      author: "Bill Donahue",
      title:
        "Drake Files Second Action Against UMG, Alleging Defamation Over Kendrick Lamar’s ‘False’ Song - Billboard",
      description:
        "Drake has launched a second legal action against Universal Music Group over Kendrick Lamar’s “Not Like Us,” accusing the music giant of defamation.",
      url: "http://www.billboard.com/pro/drake-second-legal-action-umg-iheart-pay-for-play-defamation/",
      urlToImage:
        "https://www.billboard.com/wp-content/uploads/2024/11/drake-2022-atlanta-live-a-billboard-pro-1260_be72dc.jpg?w=1024",
      publishedAt: "2024-11-26T17:08:02Z",
      content:
        "Drake has launched a second bombshell legal action against Universal Music Group over Kendrick Lamar’s “Not Like Us,” accusing the music giant of defamation and claiming it could have halted the rele… [+3598 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Owen Gleiberman",
      title: "'Moana 2' Review: More Dutiful Than Inspired Sequel - Variety",
      description:
        "The songs lack Lin-Manuel Miranda's magic, but the movie has vibrant monsters and a flow of movement that keeps your eyeballs dancing.",
      url: "https://variety.com/2024/film/reviews/moana-2-review-dwayne-johnson-auli-i-cravalho-1236222936/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2016/11/moana-2.jpg?w=1000&h=563&crop=1",
      publishedAt: "2024-11-26T17:00:00Z",
      content:
        "At the end of “Moana,” which came out in 2016, our plucky Polynesian heroine-who’s-not-a-princess had defeated the giant lava monster Te Kā and returned the heart of Te Fiti, the moss-green goddess o… [+5070 chars]",
    },
    {
      source: {
        id: null,
        name: "POLITICO.eu",
      },
      author: "Seb Starcevic, Nette Nöstlinger",
      title:
        "Beer-drinking Putin, Brexit bashing and Trump tension: Standout tales in Merkel’s new book - POLITICO Europe",
      description: "We read it so you don’t have to.",
      url: "https://www.politico.eu/article/former-germany-chancellor-angela-merkel-memoir-vladimir-putin-brexit-donald-trump/",
      urlToImage:
        "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2024/11/26/GettyImages-2186239209-scaled.jpg",
      publishedAt: "2024-11-26T16:52:00Z",
      content:
        "Sadistic Putin: Merkel has been famous for keeping her personal life private, but her phobia of dogs after she was bitten in 1995 is well known. That didnt stop Putin from giving her a large stuffed … [+1089 chars]",
    },
    {
      source: {
        id: null,
        name: "Deadline",
      },
      author: "Denise Petski",
      title:
        "‘Vanderpump Rules’ Renewed For Season 12 By Bravo With All-New Cast - Deadline",
      description:
        "Bravo has renewed Vanderpump Rules for a 12th season, which will return with an all-new cast.",
      url: "http://deadline.com/2024/11/vanderpump-rules-renewed-season-12-bravo-new-cast-1236187839/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2024/04/vanderpump-rules.jpg?w=1024",
      publishedAt: "2024-11-26T16:51:00Z",
      content:
        "Bravo has renewed Vanderpump Rules for a 12th season, which will return with an all-new cast.\r\nThe network revealed today that season 12 will feature Lisa Vanderpump and a new group of “close-knit SU… [+1673 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: "NPR",
      title:
        "Eyewitnesses in Gaza say Israel is using sniper drones to shoot Palestinians - NPR",
      description: null,
      url: "https://news.google.com/rss/articles/CBMihwFBVV95cUxPSnphWkhfZDlfWllDQnJ0dDBaN0hSUEtKdF9BTGw0THFtdjBoQnRtZUN2RkE2VEVrcUV6eEhIamY3UTA3bno5U3BWREJCeDZwdmhWUUE3Vlp0MklLVlBVb0RsbXNBSWdvR0ZVOXRiZFpPaHZPRGdqckdvWi1jVmhycE1rb01SckE?oc=5",
      urlToImage: null,
      publishedAt: "2024-11-26T16:48:38Z",
      content: null,
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "Berkeley Lovelace Jr., Evan Bush",
      title:
        "Biden proposes weight loss drug coverage requirements for Medicare and Medicaid - NBC News",
      description:
        "Weight loss drugs like Wegovy, Zepbound and Ozempic would be covered by Medicare and Medicaid under a Biden administration proposal.",
      url: "https://www.nbcnews.com/health/health-news/biden-proposes-requiring-medicare-medicaid-cover-weight-loss-drugs-rcna181756",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-11/241125-wegrovy-ozempic-wm-535p-138cfd.jpg",
      publishedAt: "2024-11-26T16:25:52Z",
      content:
        "The Biden administration plans to require Medicare and Medicaid to offer coverage of weight loss medications for people seeking obesity treatment. \r\nThe new rule, which was proposed by the administra… [+6128 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Ed Cara",
      title:
        "Losing Weight With Ozempic Might Also Lighten Your Bar Tab, Study Finds - Gizmodo",
      description:
        "A study of 14,000 WeightWatchers participants is the latest to suggest that Ozempic and similar obesity drugs could be adapted into treatments for substance use disorders.",
      url: "https://gizmodo.com/losing-weight-with-ozempic-might-also-lighten-your-bar-tab-study-finds-2000530051",
      urlToImage:
        "https://gizmodo.com/app/uploads/2024/11/GettyImages-124337728.jpg",
      publishedAt: "2024-11-26T16:00:57Z",
      content:
        "Losing weight with Ozempic and similar drugs might have another unexpected benefit: a lighter bar tab. New research published today has found evidence that people taking these drugs often cut down th… [+5252 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Nick Bromberg",
      title:
        "North Carolina fires Mack Brown a day after he said he planned to be back in 2025 - Yahoo Sports",
      description: "Brown is in his second stint as UNC's head coach.",
      url: "https://sports.yahoo.com/north-carolina-fires-mack-brown-a-day-after-he-said-he-planned-to-be-back-in-2025-153030561.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/r6EbvePzcBqvaIVOu8wlUA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-11/513c51a0-ac0b-11ef-aebf-43d5fd8504aa",
      publishedAt: "2024-11-26T15:53:23Z",
      content:
        "North Carolina head coach Mack Brown watches as the team warms up before an NCAA college football game against Wake Forest, Saturday, Nov. 16, 2024, in Chapel Hill, N.C. (AP Photo/Chris Seward)\r\nMack… [+4161 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Amelia Lucas",
      title:
        "Constellation Brands' stock falls as Trump tariff plan threatens to make Modelo and Corona more expensive - CNBC",
      description:
        "Constellation manufactures all of its beers, including Modelo and Corona, in Mexico.",
      url: "https://www.cnbc.com/2024/11/26/trump-tariff-modelo-corona-constellation-brands.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107256987-1686773714782-gettyimages-1498491891-dsc04612_xos4xnw7.jpeg?v=1686773799&w=1920&h=1080",
      publishedAt: "2024-11-26T15:45:30Z",
      content:
        "Shares of Constellation Brands fell 3.5% on Tuesday after President-elect Donald Trump announced plans to place a 25% tariff on Mexican imports once he's inaugurated.\r\nConstellation imports all of it… [+1810 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Alex Harring, Samantha Subin",
      title:
        "S&P 500 rises slightly following Trump tariff plans; Amgen weighs on Dow: Live updates - CNBC",
      description:
        "The Dow Jones Industrial Average hit a fresh all-time high and closed at another record on Monday.",
      url: "https://www.cnbc.com/2024/11/25/stock-market-today-live-updates.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/108015852-1722630575810-gettyimages-2165010416-ms2_9931_6kvdo0lh.jpeg?v=1732571663&w=1920&h=1080",
      publishedAt: "2024-11-26T15:31:00Z",
      content:
        "The S&amp;P 500 rose slightly on Tuesday as investors assessed the threat of new tariffs from President-elect Donald Trump.\r\nThe broad market index advanced 0.3%, while the Nasdaq Composite climbed 0… [+1799 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "Juan Soto free agency: Why Mets have more to offer than biggest paycheck in pursuit of superstar - CBS Sports",
      description:
        "Winning the Soto sweepstakes would go a long way in Steve Cohen and David Stearns' quest for a dynasty",
      url: "https://www.cbssports.com/mlb/news/juan-soto-free-agency-why-mets-have-more-to-offer-than-biggest-paycheck-in-pursuit-of-superstar/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2024/11/25/ae420114-eef0-452c-a13e-01eabc289399/thumbnail/1200x675/b682c8b985592549ba8d860fb9491eba/soto-usatsi-1.png",
      publishedAt: "2024-11-26T15:10:25Z",
      content:
        "Two Saturdays ago, a New York Mets contingent led by owner Steve Cohen, POBO David Stearns, and manager Carlos Mendoza met with top-ranked free agentJuan Soto and agent Scott Boras in Southern Califo… [+5225 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author: "Mary Whitfill Roeloffs",
      title:
        "Thanksgiving Winter Storms Forecasted Across US—Here’s Where Travel Could Be Disrupted - Forbes",
      description:
        "Winter storm warnings have been issued for parts of the U.S. this Thanksgiving week—here's where snow could fall.",
      url: "https://www.forbes.com/sites/maryroeloffs/2024/11/26/thanksgiving-winter-storms-forecasted-across-us-heres-where-travel-could-be-disrupted/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/6745dd6306f2dd40e0913bf2/0x0.jpg?format=jpg&crop=1886,1062,x0,y97,safe&height=900&width=1600&fit=bounds",
      publishedAt: "2024-11-26T14:52:00Z",
      content:
        "Winter storm warnings going into the week of Thanksgiving stretch from California to the East Coast and the potential for snowparticularly in the Northeastcould impact plans as travel is expected to … [+3886 chars]",
    },
    {
      source: {
        id: null,
        name: "BaltimoreRavens.com",
      },
      author: null,
      title:
        "Late for Work: Pundits Credit John Harbaugh's Aggressive Decisions as Reason for Ravens' Win - BaltimoreRavens.com",
      description:
        "Under-appreciated stars shine in Los Angeles. Slow starts are becoming a concern for the offense.",
      url: "https://www.baltimoreravens.com/news/john-harbaugh-aggressive-ravens-chargers-week-12-monday-night-football-late-for-work",
      urlToImage:
        "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/ravens/cndldfefbtsqkrtuytxr",
      publishedAt: "2024-11-26T14:48:46Z",
      content: null,
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "CARLA K. JOHNSON",
      title:
        "New rule allows HIV-positive organ transplants - The Associated Press",
      description:
        "People with HIV who need a kidney or liver transplant will be able to receive an organ from a donor with HIV. That's according to a new rule announced Tuesday by U.S. health officials. Previously, such transplants could be done only as part of research studie…",
      url: "https://apnews.com/article/kidney-liver-transplant-hiv-5392b80df9c54b3799605483ce00d2dd",
      urlToImage:
        "https://dims.apnews.com/dims4/default/871ed59/2147483647/strip/true/crop/3500x1969+0+181/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fb4%2Faf%2F34eb610d4712cf02bd71ff43f376%2Fec04afa4e37e49feb4b0a3218379ea91",
      publishedAt: "2024-11-26T14:38:00Z",
      content:
        "People with HIV who need a kidney or liver transplant will be able to receive an organ from a donor with HIV under a new rule announced Tuesday by U.S. health officials.\r\nPreviously, such transplants… [+1620 chars]",
    },
    {
      source: {
        id: null,
        name: "Sports Illustrated",
      },
      author: "Tim Capurso",
      title:
        "Michael Malone Calls Out Nikola Jokic, Jamal Murray After Nuggets' Blowout Loss - Sports Illustrated",
      description:
        "Michael Malone called out the Nuggets' two stars, Nikola Jokic and Jamal Murray, after the lopsided loss vs. the Knicks.",
      url: "https://www.si.com/nba/michael-malone-calls-out-nikola-jokic-jamal-murray-nuggets-loss",
      urlToImage:
        "https://images2.minutemediacdn.com/image/upload/c_crop,w_3762,h_2116,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01jdmb9s1xgx77wq0hex.jpg",
      publishedAt: "2024-11-26T14:35:17Z",
      content:
        "The Denver Nuggets, in a 145-118 blowout loss to the New York Knicks at Ball Arena, permitted the most regulation points they've allowed at home since 1991. Such a lopsided loss would be one the team… [+1972 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Jeffry Bartash",
      title:
        "Fed’s ‘bumpy’ road to low inflation seen getting jolt from PCE price gauge - MarketWatch",
      description:
        "PCE index due for 10 a.m. Wednesday release due to Thanksgiving",
      url: "https://www.marketwatch.com/story/feds-bumpy-road-to-low-inflation-seen-getting-another-jolt-from-pce-price-gauge-e2a2826a",
      urlToImage: "https://images.mktw.net/im-88355140/social",
      publishedAt: "2024-11-26T14:23:00Z",
      content:
        "The Federal Reserves preferred inflation gauge is likely to show a sharper increase in prices in October for the second month in a row, adding to the uncertainty about how much the central bank will … [+248 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "Reported iPhone 17 Air compromises tell us a lot about Apple’s thinking - 9to5Mac",
      description:
        "We’ve known for some time that the iPhone 17 Air will require compromises to pull off the ultra-thin design, but...",
      url: "https://9to5mac.com/2024/11/26/reported-iphone-17-air-compromises-tell-us-a-lot-about-apples-thinking/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/11/iPhone-Air-mockup-02.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-11-26T14:23:00Z",
      content:
        "We’ve known for some time that the iPhone 17 Air will require compromises to pull off the ultra-thin design, but a new report yesterday suggests buyers may be sacrificing even more than we thought.\r\n… [+4387 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Maayan Lubell, Maya Gebeily, Laila Bassam",
      title:
        "Israel carries out airstrikes in Beirut ahead of anticipated ceasefire deal - Reuters",
      description:
        "Israel mounted waves of pounding airstrikes in Beirut on Tuesday as its security cabinet was due to discuss a ceasefire deal with its Hezbollah foes that could take effect as soon as Wednesday.",
      url: "https://www.reuters.com/world/middle-east/israel-poised-approve-ceasefire-with-hezbollah-israeli-official-says-2024-11-26/",
      urlToImage:
        "https://www.reuters.com/resizer/v2/EEEBHJNVPVJORAKR2FOOHXRPF4.jpg?auth=accc9234861bfea6446be56391e014a2b981c0ae4a2093fe0ff4850e11b98590&height=1005&width=1920&quality=80&smart=true",
      publishedAt: "2024-11-26T14:20:13Z",
      content: null,
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Denny Jacob",
      title:
        "Kohl’s Outlook Suggests Tough Holiday Period - The Wall Street Journal",
      description: "For 2024, Kohl’s now expects sales to decline 7%-8%",
      url: "https://www.wsj.com/business/retail/kohls-3q-sales-decline-new-2024-outlook-suggests-tough-holiday-period-7b5818ce",
      urlToImage: "https://images.wsj.net/im-08273871/social",
      publishedAt: "2024-11-26T17:39:00Z",
      content: null,
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Kerry Breen",
      title:
        "Fugitive on FBI's Most Wanted Terrorists list arrested in U.K. - CBS News",
      description:
        "Daniel Andreas San Diego was indicted more than 20 years ago in connection with two 2003 bombings.",
      url: "https://www.cbsnews.com/news/fbi-most-wanted-terrorists-arrested-daniel-andreas-san-diego/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2024/11/26/68e1e420-6c6d-4378-bb28-402be4e95cbf/thumbnail/1200x630/43c80b4dfa15ca5657c8ac57d56ec4a9/screenshot-2024-11-26-at-11-49-57-am.png?v=e3aa8b4a58817620ee227c79202c9709",
      publishedAt: "2024-11-26T17:35:22Z",
      content:
        "Daniel Andreas San Diego, one of the FBI's most wanted terror suspects, has been arrested in Wales, U.S. authorities said Tuesday.\r\nThe FBI said it coordinated with U.K. authorities to arrest San Die… [+1985 chars]",
    },
    {
      source: {
        id: null,
        name: "Billboard",
      },
      author: "Bill Donahue",
      title:
        "Drake Files Second Action Against UMG, Alleging Defamation Over Kendrick Lamar’s ‘False’ Song - Billboard",
      description:
        "Drake has launched a second legal action against Universal Music Group over Kendrick Lamar’s “Not Like Us,” accusing the music giant of defamation.",
      url: "http://www.billboard.com/pro/drake-second-legal-action-umg-iheart-pay-for-play-defamation/",
      urlToImage:
        "https://www.billboard.com/wp-content/uploads/2024/11/drake-2022-atlanta-live-a-billboard-pro-1260_be72dc.jpg?w=1024",
      publishedAt: "2024-11-26T17:08:02Z",
      content:
        "Drake has launched a second bombshell legal action against Universal Music Group over Kendrick Lamar’s “Not Like Us,” accusing the music giant of defamation and claiming it could have halted the rele… [+3598 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Owen Gleiberman",
      title: "'Moana 2' Review: More Dutiful Than Inspired Sequel - Variety",
      description:
        "The songs lack Lin-Manuel Miranda's magic, but the movie has vibrant monsters and a flow of movement that keeps your eyeballs dancing.",
      url: "https://variety.com/2024/film/reviews/moana-2-review-dwayne-johnson-auli-i-cravalho-1236222936/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2016/11/moana-2.jpg?w=1000&h=563&crop=1",
      publishedAt: "2024-11-26T17:00:00Z",
      content:
        "At the end of “Moana,” which came out in 2016, our plucky Polynesian heroine-who’s-not-a-princess had defeated the giant lava monster Te Kā and returned the heart of Te Fiti, the moss-green goddess o… [+5070 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Owen Gleiberman",
      title: "'Moana 2' Review: More Dutiful Than Inspired Sequel - Variety",
      description:
        "The songs lack Lin-Manuel Miranda's magic, but the movie has vibrant monsters and a flow of movement that keeps your eyeballs dancing.",
      url: "https://variety.com/2024/film/reviews/moana-2-review-dwayne-johnson-auli-i-cravalho-1236222936/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2016/11/moana-2.jpg?w=1000&h=563&crop=1",
      publishedAt: "2024-11-26T17:00:00Z",
      content:
        "At the end of “Moana,” which came out in 2016, our plucky Polynesian heroine-who’s-not-a-princess had defeated the giant lava monster Te Kā and returned the heart of Te Fiti, the moss-green goddess o… [+5070 chars]",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "2024-11-26T19:29:00Z",
      content: "[Removed]",
    },
    {
      source: {
        id: null,
        name: "Hollywood Reporter",
      },
      author: "Pamela McClintock",
      title:
        "Box Office: ‘Wicked’ Sings to Nearly $16M on Monday, a November Record - Hollywood Reporter",
      description:
        "'Gladiator II' also enjoyed a strong Monday with $5.5 million.",
      url: "http://www.hollywoodreporter.com/movies/movie-news/wicked-box-office-record-monday-1236071728/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2024/10/2551_SB_00048-H-2024.jpg?w=1296&h=730&crop=1",
      publishedAt: "2024-11-26T18:58:44Z",
      content:
        "Wicked continued to make box office history with $15.8 million in Monday ticket sales, a November record for the first day of the week, not adjusted for inflation.\r\nThat’s well ahead of the previous … [+2092 chars]",
    },
    {
      source: {
        id: null,
        name: "Space.com",
      },
      author: "Elizabeth Howell",
      title:
        "ISS astronauts open hatch to Russian spacecraft after strange smell delays cargo delivery - Space.com",
      description:
        "'The odor likely was outgassing from materials inside the cargo spacecraft.'",
      url: "https://www.space.com/space-exploration/international-space-station/iss-astronauts-open-hatch-to-russian-spacecraft-after-strange-smell-delays-cargo-delivery",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/JX9AqoghCmoLdZSCvspPtN-1200-80.jpg",
      publishedAt: "2024-11-26T18:53:36Z",
      content:
        "A Russian spacecraft is finally open to the space station after its cargo delivery was delayed by an unusual smell.\r\nA robotic Progress spacecraft docked at the International Space Station as planned… [+2852 chars]",
    },
    {
      source: {
        id: null,
        name: "mlive.com",
      },
      author: "Tanda Gmiter | tgmiter@mlive.com",
      title:
        "Arctic blast to hit by Thanksgiving night, West Michigan could see inches of snow pile up - MLive.com",
      description:
        "The cold arrives late on the holiday, and then areas like Grand Rapids, Holland and South Haven could see several inches of snow over the following days.",
      url: "https://www.mlive.com/weather/2024/11/arctic-blast-to-hit-by-thanksgiving-night-west-michigan-could-see-inches-of-snow-pile-up.html",
      urlToImage:
        "https://www.mlive.com/resizer/v2/UYOMMC477JGUPFA56XCLX255PU.jpg?auth=6bb4a8eee5e8f7df73a32022e71e3e56bfc5e1d207ed09da4df67f11ba2c8228&width=1280&quality=90",
      publishedAt: "2024-11-26T17:41:00Z",
      content:
        "A real taste of winter is expected to hit Michigan and settle in for several days, beginning late on Thanksgiving Day. \r\nA blast of Arctic air will bring down our daytime high temperatures below free… [+1712 chars]",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "2024-11-26T17:03:39Z",
      content: "[Removed]",
    },
    {
      source: {
        id: null,
        name: "Turn to 10",
      },
      author: "JESSICA A. BOTELHO | The National News Desk",
      title:
        "Coroner confirms cause of death for father of missing Hawaii woman found outside LAX - KOMO News",
      description:
        'The father of a missing 30-year-old woman from Hawaii died due to "multiple blunt force traumatic injuries," according to a coroner in California.',
      url: "https://turnto10.com/news/nation-world/coroner-confirms-cause-of-death-for-father-of-missing-hawaii-woman-found-outside-lax-los-angeles-california-maui-disappear-vanish-multiple-blunt-force-traumatic-injuries-died-body-found-suicide-investigation-airport-parking-lot",
      urlToImage:
        "https://turnto10.com/resources/media2/16x9/640/986/center/90/d383d487-7561-4d1b-81a9-4346f92169de-poster_cf93a352fbb94cc79de8d1edc1e39aec.jpg",
      publishedAt: "2024-11-26T15:39:17Z",
      content:
        'LOS ANGELES (TNND) The father of a missing 30-year-old woman from Hawaii died due to "multiple blunt force traumatic injuries," a coroner in California confirmed. \r\nIn online records, the Los Angeles… [+1912 chars]',
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Daniel Lawler and Julien Dury",
      title:
        "Fewest new HIV cases since late 1980s: UNAIDS report - Yahoo! Voices",
      description:
        "Fewer people contracted HIV last year than at any point since the rise of the disease in the late 1980s, the United Nations said Tuesday, warning that this...",
      url: "https://www.yahoo.com/news/fewest-hiv-cases-since-1980s-143332456.html",
      urlToImage:
        "https://media.zenfs.com/en/afp.com/83419761396c732159b19c7880ccc80d",
      publishedAt: "2024-11-26T14:33:32Z",
      content:
        "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nF… [+3501 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Gizmodo Deals",
      title:
        "For the First Time Ever, The New M4 iPad Pros Are on Sale And Amazon Is Offering Major Price Cuts - Gizmodo",
      description:
        "Released in May, the M4 iPad Pros have plunged to an all-time low price on Amazon.",
      url: "https://gizmodo.com/for-the-first-time-ever-the-new-m4-ipad-pros-are-on-sale-and-amazon-is-offering-major-price-cuts-2000529976",
      urlToImage: "https://gizmodo.com/app/uploads/2024/11/ipad-pro-m4.jpg",
      publishedAt: "2024-11-26T12:40:05Z",
      content:
        "If you’re currently looking for a high-performance tablet, now is the perfect time to consider the iPad Pro M4 available at all-time low prices on Amazon for Black Friday. Both the 11-inch and 13-inc… [+2229 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title:
        "Pakistan: Thousands defy police in support of Imran Khan - BBC.com",
      description:
        "The jailed former leader is calling on the protesters to stay in Islamabad until their demands are met.",
      url: "https://www.bbc.com/news/articles/cg7gklm0r04o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/6a7b/live/cc9e7090-abc4-11ef-bdf5-b7cb2fa86e10.jpg",
      publishedAt: "2024-11-26T10:11:25Z",
      content:
        "The city's roads have been blocked with shipping containers to stop the march reaching the centre\r\nSupporters of jailed former Pakistan prime minister Imran Khan have been pushed back by security for… [+3525 chars]",
    },
    {
      source: {
        id: "fortune",
        name: "Fortune",
      },
      author: "Anne D'Innocenzio, The Associated Press",
      title:
        "Walmart becomes biggest company to roll back DEI policies - Fortune",
      description:
        "Under conservative pressure to ‘end wokeness in corporate America’",
      url: "https://fortune.com/2024/11/26/walmart-biggest-company-roll-back-dei-policies-wokeness-corporate-america/",
      urlToImage:
        "https://fortune.com/img-assets/wp-content/uploads/2024/11/AP24331068889256-e1732611763225.jpg?resize=1200,600",
      publishedAt: "2024-11-26T09:05:00Z",
      content:
        "Walmart, the worlds largest retailer, is rolling back its diversity, equity and inclusion policies, joining a growing list of major corporations that have done the same after coming under attack by c… [+4085 chars]",
    },
    {
      source: {
        id: null,
        name: "Spaceflight Now",
      },
      author: null,
      title:
        "Live coverage: SpaceX to launch Starlink satellites on Falcon 9 rocket from the Kennedy Space Center - Spaceflight Now",
      description: null,
      url: "https://spaceflightnow.com/2024/11/25/live-coverage-spacex-to-launch-starlink-satellites-on-falcon-9-rocket-from-the-kennedy-space-center/",
      urlToImage: null,
      publishedAt: "2024-11-25T20:14:49Z",
      content:
        "File: A Falcon 9 rocket stands ready to launch a Starlink mission. Image: SpaceX\r\nUpdate 943 p.m. EST (0243 UTC): SpaceX pushed back the T-0 launch time.\r\nSpaceX is looking to complete its second lau… [+1083 chars]",
    },
    {
      source: {
        id: null,
        name: "NASA",
      },
      author: "Roxana Bardan",
      title:
        "NASA Invites Media to Firefly Blue Ghost Mission 1 Launch to Moon - NASA",
      description:
        "Media accreditation is open for the next delivery to the Moon through NASA’s CLPS (Commercial Lunar Payload Services) initiative and Artemis campaign for the",
      url: "https://www.nasa.gov/news-release/nasa-invites-media-to-firefly-blue-ghost-mission-1-launch-to-moon/",
      urlToImage:
        "https://www.nasa.gov/wp-content/uploads/2024/11/bg-glamourshot-flags.jpg",
      publishedAt: "2024-11-25T15:49:01Z",
      content:
        "Media accreditation is open for the next delivery to the Moon through NASAs CLPS (Commercial Lunar Payload Services) initiative and Artemis campaign for the benefit of humanity. A six-day launch wind… [+3290 chars]",
    },
  ];

  constructor() {
    super();
    //console.log("I am news constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  handlePrevious = () => {
    console.log("Previous");
  };
  handleNext = () => {
    console.log("Next");
  };
  /*async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=06f06182035242679bcbe374be640e22";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }*/
  render() {
    return (
      <>
        <div className="container my-3">
          <h2>{this.articles.length}</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              //console.log(element);
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://static1.bigstockphoto.com/7/5/2/large1500/257366050.jpg"
                    }
                    newsUrl={element.url ? element.url : ""}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevious}
              disabled={(this.state.page = 1)}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
