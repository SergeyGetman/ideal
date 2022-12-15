export const MOCK = {
  id: '00fa6966-82a0-4f99-9926-e22546b2a8ba',
  title: 'Thinking in Ranges: How It Drastically Improves Your Poker Game',
  date: '2021-03-16T00:00:00.000Z',
  viewCount: 476,
  commentsCount: 18,
  content: `
    <h3>Reading Souls is for Poker Movies</h3>
    <p style="font-size: 24px; color: #3E4776">
      <b>Have you ever seen the movie Rounders? Sure you have. It's a great film. If by some odd chance you haven't seen it, you definitely should.</b>
    </p>
    <p>
      There's one particularly awesome scene in that movie when the main character Michael (played by Matt Damon) interrupts his professor's home game to drop off some papers. Just seconds after looking at the facial expressions of the participating players he says what each and everyone at the table is holding.<br />
      <b>Check out the scene here:</b>
    </p>
    <p>
      <img src="https://cdn.freelance.ru/img/portfolio/pics/00/3B/79/3897790.jpg?mt=df504daf" alt="" />
    </p>
    <p>
      <b>Well, Michael is a poker prodigy and only Teddy KGB can stop him on his way to the top. And that's just what poker prodigies and professional players do, right?</b> Read souls and pinpoint the exact holdings of their opponents. That's their gift. Except it isn't. Rounders is great movie, but it's a work of fiction. The way the protagonist reads hands is also a work of fiction.
    </p>
    <p> 
      No poker player has the gift to pinpoint the exact holdings of their opponents. And trying to do so is usually futile and detrimental to your game. Let's take a look a simple example hand and see why the "soul read" doesn't really work:
    </p>
    <h3>
        How Not to Read Poker Hands
    </h3>
    <p>
      We're playing $1/$2 Texas Hold'em and holding pocket tens (ThTs) in middle position. After some folds we open the pot with a raise to $6. Only the player on the button calls. Now there's $15 in the middle and we get to see a flop:
    </p>
    <ul>
      <li>Our opponent <b>is very tight</b>, so he certainly has a set and we're beat</li>
      <li>Our opponent <b>is very aggressive</b> and he certainly only has a flush draw</li>
      <li>Our opponent <b>is a fish</b> and he clearly has top pair</li>
      <li>Our opponent <b>is wild and reckless</b> and he certainly only has Ace-Low and wants to scare us away</li>
    </ul>
    <p>
      All those thoughts might appear sound and good if you know your opponent well enough. But they're actually terrible even if you know your opponent perfectly.
    </p>
    <h3>
      Put Your Opponent on a Range of All Possible Hands
    </h3>
    <p>
      So, what's wrong with those thoughts? The problem is we're trying to put our opponent on a single hand. Yes, in the end, he is holding one specific hand. But right now we just don't know what hand he has. 
    </p>
    <img style="float: right; margin-left: 20px; width: 240px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Woman_in_a_White_Crop_Top.jpg/380px-Woman_in_a_White_Crop_Top.jpg" alt="" />
    <p>
      Unless he shows us his cards we can't be certain about it. So why would we act like we have some magical ability to read his hand? We simply can't and we shouldn't!
    </p>
    <p>
      So, what's wrong with those thoughts? The problem is we're trying to put our opponent on a single hand. Yes, in the end, he is holding one specific hand. But right now we just don't know what hand he has.
    </p>
    <p> 
      Let's go through the previous example hand and apply some logic to what our opponent might be holding. Before his first action we don't know anything about his hand so each possible holding is equally likely. There are 1,326 possible starting hands in Texas Hold'em. But since we're holding two cards ourselves (two 10s) there are only 1,225 combinations left for our opponent. Before his first action we know he's equally likely to have any of those holdings. Those are a quite a lot of combinations to consider, but fortunately we can remove lots of them (almost all them actually) after our opponent’s first action.
    </p>
    <p>
      We almost never have enough information to exactly know our opponent’s hole cards and there’s a reasonable chance we’re dead wrong with our read. We’d look rather foolish (and possibly lose a good chunk of money) if we pinpointed his holding to be a flush draw when in fact our opponent is dominating us with a set.
    </p>
    <p>
      hand? It's quite simple: We just put him on all possible hands at once. This might sound a bit hare-brained but in fact it's much more sound and reliable than putting him on just one hand.
    </p>
    <div style="clear: both">
      <blockquote>
        <hr />
        The ability to accurately and quickly think in ranges is one of the hallmarks of good poker players - not the ability to read souls like they do in the movies.
        <hr />
      </blockquote>
    </div>
    <p>
      Now instead of trying to decide which of those possible holdings our opponent has in this situation, and playing according to this “read,” we just put him on all those possibilities at once and try to find a play that works best against most of those holdings.
    </p>
    <h5>Related Reading:</h5>
    <ul>
      <li>
        <a href="#" target="_blank">How to Put Your Opponent on a Range in Poker</a>
      </li>
      <li>
        <a href="#" target="_blank">More Recommended Card Rooms</a>
      </li>    
    </ul>
    <h3>
      Find a Play According to This Hand Range
    </h3>
    <p>
      What we've done so far is established a "range" for our opponent. Now we just need to find a play according to this range. Let’s do some counting and some equity calculations to see how our pair of 10s fares against each possible holding in our opponent’s range (remember we had had a pair of 10s on a 8c7c2d Flop):
    </p>
    <table>
      <thead>
        <tr>
          <th>Opponent’s possible holding</th>
          <th>Number of possible combinations</th>
          <th>Our probability to win</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Set</td>
          <td>9</td>
          <td>12%</td>
        </tr>
        <tr>
          <td>Set</td>
          <td>9</td>
          <td>12%</td>
        </tr>
        <tr>
          <td>Set</td>
          <td>9</td>
          <td>12%</td>
        </tr>
        <tr>
          <td>Set</td>
          <td>9</td>
          <td>12%</td>
        </tr>
        <tr>
          <td>Set</td>
          <td>9</td>
          <td>12%</td>
        </tr>
        <tr>
          <td>Straight Draw</td>
          <td>4</td>
          <td>60%</td>
        </tr>
      </tbody>
    </table>
    <p>
      This table shows the complete range for our opponent in this specific situation and our equity against each holding. This table will help us to find the best play with our hand. We can see straightaway that we’re either miles behind (against sets, two pair and jacks) or more or less a coin flip (against flush and straight draws). Only against nines we’re actually a decent favorite. Knowing this it’s quite easy for us to find the best move: We simply fold our overpair. We don’t have to know what exactly our opponent is holding.
    </p>
    <p>
      It’s sufficient to know that there are enough hands in his range that have us crushed and too few hands we beat. Even against his draws (which are semi-bluffs on the flop) we’re only barely ahead. Using a tool like ProPokerTools (http://www.propokertools.com/simulations) we can calculate our exact probability of winning against our opponent’s range. It’s 42%. We’re not favored to win this hand and can let it go without giving up too much.
    </p>
  `,
};
