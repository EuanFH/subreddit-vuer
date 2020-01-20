# Subreddit Vuer
Subreddit Vuer lets you enter subreddits into a list and view their top posts.
## Landing Page
![landing page](https://github.com/EuanFH/subreddit-vuer/raw/master/page_images/landing.png)
## Subreddit Page
![subreddit page](https://github.com/EuanFH/subreddit-vuer/raw/master/page_images/subreddit.png)
## Key Decisions
* Vuex was used to store the subreddit list. This allowed me to store the state in localstorage so when you visited the website again your already entered subreddits would appear. I could have shared state via props but this would have become cumbersom quickly since you can add to the subreddit list in two parts of the application one of which is on a different page than the list. Its learning curve wasn't as steep as I thought and made writing the application easier.
* Each component in this application was made by me. This was good because I could style them how every I liked and add any event I wanted to them. It had some downsides all the icons where SVGs the support for them is different between browsers, and they can render them completely differently. This lead to a bug on chrome where one of the SVGs would not render. I could fix the issue but it would not be centered and looked really off. Next time for a project such as this I would use vuetify since it would have been way quicker to get up and running with.
* Not splitting up the SVG from the Fab component. I wanted to make a generic Fab component that you provided with a svg then write wrapper component for each button type. I couldn't find out how to inherit childs props and I think my reasoning was flawed. So I left it with the SVG baked in.
* Using the more basic Reddit API. This was a mixed bag the API way easier to work with than the advanced one but also had no cors configuration. This lead me to using a proxy service that added cors to the request. I would have not done this if this was a production application. The more advanced API has cors but only once a user has authenticated. It also has a nice javascript library but it returned custom promises not based on the standard spec. I decided that the authentication of a user would be outside the scope of this project so stuck with the more basic API.

## Known Issues
* Thumbnails for nsfw posts on sfw subreddits fail to load
* Subreddits that don't exist get stuck and don't return and error.
* Chip cancel icon dosn't render correctly on chrome
* Subreddit page isn't responsive enough and dosn't work correctly on mobile
* Deleting subreddit your on from the list dosn't redirect you to another page
* Adding too many subreddits to the list will cause the new ones to disapear and be inaccessable

## Learned
* Spent way too much time than I should have on the dynamic text field place holder. It was a fun gimmick but the effort put in for what I got wasn't worth it and the code is messy.
* I should have avoided using css not based on classes was basing on element from what I had seen in the docs. But I didn't realise that the scoped css cascaded down the component tree this caused some styling issues.
* I should have added text classes to the theme. I have a lot of duplicated code setting text color.
* Sticking to single quotes or double quotes and not using both. It seemed more idomatic to use singel quotes from what I saw in the documentation. But I have a habit of using double quotes from a language that used single quotes to denate chars. This lead me to using double and single quotes due to habit. A better eslint config would have made this a non issue.
* Not mixing semi colons and no semi colons. I decided to use semi colons but would forget to add them. This again would have been fine with a better eslint config to pick up these errors.
