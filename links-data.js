const GDE_LINKS = [
  // ═══ CORE ═══
  {
    zone: "CORE",
    category: "Major Sports News",
    icon: "📰",
    color: "red",
    tags: "news sports general espn cbs yahoo fox nbc athletic si bleacher report",
    links: [
      { name: "ESPN", url: "https://www.espn.com", top: true },
      { name: "CBS Sports", url: "https://www.cbssports.com" },
      { name: "Yahoo Sports", url: "https://sports.yahoo.com" },
      { name: "Fox Sports", url: "https://www.foxsports.com" },
      { name: "NBC Sports", url: "https://www.nbcsports.com" },
      { name: "The Athletic", url: "https://theathletic.com" },
      { name: "Sports Illustrated", url: "https://www.si.com" },
      { name: "Bleacher Report", url: "https://bleacherreport.com" },
      { name: "Sporting News", url: "https://www.sportingnews.com" },
      { name: "ProFootballTalk", url: "https://profootballtalk.nbcsports.com" },
      { name: "MLB Trade Rumors", url: "https://www.mlbtraderumors.com" },
      { name: "HoopsHype", url: "https://hoopshype.com" },
      { name: "The Ringer", url: "https://www.theringer.com" },
      { name: "Sky Sports", url: "https://www.skysports.com" }
    ]
  },
  {
    zone: "CORE",
    category: "Waiver Wire & Player News",
    icon: "🔥",
    color: "orange",
    tags: "waiver wire player news injuries fantasy baseball football basketball daily rotowire",
    links: [
      { name: "RotoWire Player News", url: "https://www.rotowire.com/football/news.php", top: true },
      { name: "FantasyPros Waiver Wire", url: "https://www.fantasypros.com/nfl/waiver-wire/" },
      { name: "RotoWire Baseball News", url: "https://www.rotowire.com/baseball/" },
      { name: "RotoWire Football News", url: "https://www.rotowire.com/football/" },
      { name: "MLB Trade Rumors", url: "https://www.mlbtraderumors.com" },
      { name: "Pitcher List News", url: "https://www.pitcherlist.com/" },
      { name: "Underdog News", url: "https://www.underdogfantasy.com/news" },
      { name: "CBS Waiver Wire", url: "https://www.cbssports.com/fantasy/football/add-drop/" },
      { name: "Sleeper News Feed", url: "https://sleeper.com/topic/nfl" },
      { name: "PFT Transactions", url: "https://profootballtalk.nbcsports.com/transactions/" }
    ]
  },
  {
    zone: "CORE",
    category: "Rankings & Projections",
    icon: "🎯",
    color: "purple",
    tags: "rankings projections fantasy baseball football basketball dfs expert consensus fantasypros rotowire pff numberfire",
    links: [
      { name: "FantasyPros NFL Rankings", url: "https://www.fantasypros.com/nfl/rankings/consensus-cheatsheets.php", top: true },
      { name: "FantasyPros MLB Rankings", url: "https://www.fantasypros.com/mlb/rankings/" },
      { name: "RotoWire MLB Projections", url: "https://www.rotowire.com/baseball/projections.php" },
      { name: "RotoWire NFL Projections", url: "https://www.rotowire.com/football/projections.php" },
      { name: "FanGraphs Projections", url: "https://www.fangraphs.com/projections.aspx" },
      { name: "NumberFire NFL", url: "https://www.numberfire.com/nfl/projections" },
      { name: "NumberFire NBA", url: "https://www.numberfire.com/nba/daily-projections" },
      { name: "PFF Fantasy Rankings", url: "https://www.pff.com/fantasy/rankings" },
      { name: "Hashtag Basketball", url: "https://hashtagbasketball.com/fantasy-basketball-rankings" },
      { name: "Establish The Run", url: "https://establishtherun.com" },
      { name: "4for4", url: "https://www.4for4.com" }
    ]
  },
  {
    zone: "CORE",
    category: "Game Day Tools",
    icon: "🗓",
    color: "teal",
    tags: "game day tools injuries lineups depth charts weather conditions nfl mlb nba nhl daily rotowire nflweather ballpark",
    links: [
      { name: "RotoWire Injuries", url: "https://www.rotowire.com/football/injuries.php", top: true },
      { name: "RotoWire MLB Lineups", url: "https://www.rotowire.com/baseball/daily-lineups.php" },
      { name: "Lineups.com", url: "https://lineups.com", desc: "Daily lineups, depth charts, and matchups for all major sports" },
      { name: "RotoWire NFL Depth Charts", url: "https://www.rotowire.com/football/depth-charts.php" },
      { name: "FantasyPros NFL Depth Charts", url: "https://www.fantasypros.com/nfl/depth-charts.php" },
      { name: "RotoWire NBA Depth Charts", url: "https://www.rotowire.com/basketball/depth-charts.php" },
      { name: "DailyFaceoff NHL Goalies", url: "https://www.dailyfaceoff.com/starting-goalies/" },
      { name: "DailyFaceoff NHL Line Combos", url: "https://www.dailyfaceoff.com/lines" },
      { name: "Baseball Press Lineups", url: "https://www.baseballpress.com/lineups" },
      { name: "RotoWire Starting Pitchers", url: "https://www.rotowire.com/baseball/daily-lineups.php" },
      { name: "RotoGrinders Weather Edge", url: "https://www.rotogrinders.com/live-feed/weather", desc: "DFS-focused weather tool for NFL and MLB game conditions" },
      { name: "NFLWeather.com", url: "https://www.nflweather.com", desc: "Game-by-game NFL weather forecasts for betting and DFS" },
      { name: "Ballpark Pal (MLB Weather)", url: "https://www.ballparkpal.com", desc: "Wind speed, direction, and park conditions for every MLB game" },
      { name: "FanGraphs Park Factors", url: "https://www.fangraphs.com/guts.aspx" },
      { name: "ESPN NFL Injuries", url: "https://www.espn.com/nfl/injuries" },
      { name: "ESPN NBA Injuries", url: "https://www.espn.com/nba/injuries" },
      { name: "CBS NFL Injuries", url: "https://www.cbssports.com/nfl/injuries/" }
    ]
  },

  // ═══ FANTASY ═══
  {
    zone: "FANTASY",
    category: "Fantasy Baseball",
    icon: "⚾",
    color: "orange",
    tags: "fantasy baseball rankings projections waiver fangraphs razzball pitcher list rotoballer",
    links: [
      { name: "FanGraphs", url: "https://www.fangraphs.com", top: true },
      { name: "Pitcher List", url: "https://www.pitcherlist.com" },
      { name: "Razzball", url: "https://razzball.com" },
      { name: "RotoWire Baseball", url: "https://www.rotowire.com/baseball/" },
      { name: "FantasyPros MLB", url: "https://www.fantasypros.com/mlb/" },
      { name: "ESPN Fantasy Baseball", url: "https://fantasy.espn.com/baseball/" },
      { name: "Yahoo Fantasy Baseball", url: "https://baseball.fantasysports.yahoo.com" },
      { name: "CBS Fantasy Baseball", url: "https://www.cbssports.com/fantasy/baseball/" },
      { name: "Fantrax Baseball", url: "https://www.fantrax.com/fantasy/baseball" },
      { name: "Baseball Savant / Statcast", url: "https://baseballsavant.mlb.com" },
      { name: "NFBC", url: "https://www.nfbc.com" },
      { name: "BaseballHQ", url: "https://www.baseballhq.com" },
      { name: "RotoBaller Baseball", url: "https://www.rotoballer.com/baseball" }
      { name: "Closer Monkey", url: "https://www.closermonkey.com" }
    ]
  },
  {
    zone: "FANTASY",
    category: "Fantasy Football",
    icon: "🏈",
    color: "red",
    tags: "fantasy football nfl rankings projections waiver sleeper yahoo espn footballguys pff",
    links: [
      { name: "FantasyPros NFL", url: "https://www.fantasypros.com/nfl/", top: true },
      { name: "RotoWire Football", url: "https://www.rotowire.com/football/" },
      { name: "FootballGuys", url: "https://www.footballguys.com" },
      { name: "Pro Football Focus", url: "https://www.pff.com" },
      { name: "Establish The Run", url: "https://establishtherun.com" },
      { name: "ESPN Fantasy Football", url: "https://fantasy.espn.com/football/" },
      { name: "Yahoo Fantasy Football", url: "https://football.fantasysports.yahoo.com" },
      { name: "Sleeper", url: "https://sleeper.com" },
      { name: "CBS Fantasy Football", url: "https://www.cbssports.com/fantasy/football/" },
      { name: "Underdog Fantasy", url: "https://www.underdogfantasy.com" },
      { name: "Draft Sharks", url: "https://www.draftsharks.com" }
    ]
  },
  {
    zone: "FANTASY",
    category: "Fantasy Basketball",
    icon: "🏀",
    color: "blue",
    tags: "fantasy basketball nba rankings rotowire fantasypros hashtag basketball realgm",
    links: [
      { name: "FantasyPros NBA", url: "https://www.fantasypros.com/nba/", top: true },
      { name: "RotoWire Basketball", url: "https://www.rotowire.com/basketball/" },
      { name: "Hashtag Basketball", url: "https://hashtagbasketball.com" },
      { name: "Yahoo Fantasy Basketball", url: "https://basketball.fantasysports.yahoo.com" },
      { name: "ESPN Fantasy Basketball", url: "https://fantasy.espn.com/basketball/" },
      { name: "Sleeper", url: "https://sleeper.com" },
      { name: "Basketball Reference", url: "https://www.basketball-reference.com" },
      { name: "Cleaning The Glass", url: "https://www.cleaningtheglass.com" },
      { name: "Basketball Monster", url: "https://basketballmonster.com" },
      { name: "RealGM Basketball", url: "https://basketball.realgm.com", desc: "NBA news, transactions, forums, and team pages" }
    ]
  },
  {
    zone: "FANTASY",
    category: "Fantasy Hockey",
    icon: "🏒",
    color: "teal",
    tags: "fantasy hockey nhl rankings rotowire fantasypros daily faceoff left wing lock",
    links: [
      { name: "FantasyPros NHL", url: "https://www.fantasypros.com/nhl/", top: true },
      { name: "RotoWire Hockey", url: "https://www.rotowire.com/hockey/" },
      { name: "Daily Faceoff", url: "https://www.dailyfaceoff.com" },
      { name: "Left Wing Lock", url: "https://leftwinglock.com" },
      { name: "Yahoo Fantasy Hockey", url: "https://hockey.fantasysports.yahoo.com" },
      { name: "ESPN Fantasy Hockey", url: "https://fantasy.espn.com/hockey/" },
      { name: "MoneyPuck", url: "https://moneypuck.com" },
      { name: "Hockey Reference", url: "https://www.hockey-reference.com" }
    ]
  },
  {
    zone: "FANTASY",
    category: "DFS — Daily Fantasy",
    icon: "💰",
    color: "green",
    tags: "dfs daily fantasy draftkings fanduel underdog rotogrinders stokastic prizepicks props",
    links: [
      { name: "DraftKings", url: "https://sportsbook.draftkings.com", top: true },
      { name: "FanDuel", url: "https://www.fanduel.com" },
      { name: "Underdog Fantasy", url: "https://www.underdogfantasy.com" },
      { name: "RotoGrinders", url: "https://www.rotogrinders.com" },
      { name: "Establish The Run", url: "https://establishtherun.com" },
      { name: "Stokastic", url: "https://www.stokastic.com" },
      { name: "4for4 DFS", url: "https://www.4for4.com/dfs/" },
      { name: "NumberFire", url: "https://www.numberfire.com" },
      { name: "Fantasy Labs", url: "https://www.fantasylabs.com" },
      { name: "PrizePicks", url: "https://www.prizepicks.com", desc: "Props-based daily fantasy — one of the highest-traffic DFS sites" }
    ]
  },
  {
    zone: "FANTASY",
    category: "Draft Tools & ADP",
    icon: "📋",
    color: "purple",
    tags: "draft tools adp auction calculator sleeper nfbc fantasypros bestball",
    links: [
      { name: "FantasyPros NFL ADP", url: "https://www.fantasypros.com/nfl/adp/overall.php", top: true },
      { name: "FantasyPros MLB ADP", url: "https://www.fantasypros.com/mlb/adp/overall.php" },
      { name: "NFBC ADP", url: "https://nfc.shgn.com/adp/baseball" },
      { name: "RotoWire Auction Calc", url: "https://www.rotowire.com/baseball/auction-calculator/" },
      { name: "Sleeper Draft", url: "https://sleeper.com/draft" },
      { name: "Draft Sharks Room", url: "https://www.draftsharks.com" },
      { name: "Best Ball 10s", url: "https://www.bestball10s.com" }
    ]
  },

  // ═══ BETTING ═══
  {
    zone: "BETTING",
    category: "Sportsbooks",
    icon: "🎰",
    color: "red",
    tags: "sportsbooks betting draftkings fanduel betmgm caesars betrivers espnbet fanatics",
    links: [
      { name: "DraftKings", url: "https://sportsbook.draftkings.com", top: true },
      { name: "FanDuel", url: "https://sportsbook.fanduel.com", tag: "PROMO" },
      { name: "BetMGM", url: "https://sports.betmgm.com", tag: "OFFER" },
      { name: "Caesars", url: "https://www.caesars.com/sportsbook-and-casino" },
      { name: "BetRivers", url: "https://betrivers.com" },
      { name: "ESPN BET", url: "https://www.espnbet.com" },
      { name: "Fanatics Sportsbook", url: "https://www.fanatics.com/sportsbook" }
    ]
  },
  {
    zone: "BETTING",
    category: "Odds & Betting Analysis",
    icon: "📈",
    color: "orange",
    tags: "odds betting analysis action network covers vegas insider vsin sportsbook review oddsportal",
    links: [
      { name: "Action Network", url: "https://www.actionnetwork.com", top: true },
      { name: "Covers", url: "https://www.covers.com" },
      { name: "OddsShark", url: "https://www.oddsshark.com" },
      { name: "Vegas Insider", url: "https://www.vegasinsider.com" },
      { name: "VSiN", url: "https://www.vsin.com" },
      { name: "Sportsbook Review", url: "https://www.sportsbookreview.com" },
      { name: "OddsTrader", url: "https://oddstrader.com" },
      { name: "BettingPros", url: "https://www.bettingpros.com" },
      { name: "OddsPortal", url: "https://www.oddsportal.com" }
    ]
  },

  // ═══ DATA & RESEARCH ═══
  {
    zone: "DATA & RESEARCH",
    category: "Stats, Analytics & Research",
    icon: "📊",
    color: "blue",
    tags: "stats analytics research baseball savant pff statmuse nfl next gen nba tracking fangraphs dvoa hockey advanced metrics databases reference",
    links: [
      { name: "StatMuse", url: "https://www.statmuse.com", top: true, desc: "Natural language stat lookups across NBA, NFL, MLB, NHL" },
      { name: "Baseball Savant / Statcast", url: "https://baseballsavant.mlb.com", desc: "MLB tracking data — exit velocity, spin rate, sprint speed" },
      { name: "NFL Next Gen Stats", url: "https://nextgenstats.nfl.com", desc: "Official NFL player tracking — speed, separation, route efficiency" },
      { name: "NBA Advanced Stats", url: "https://www.nba.com/stats/leaders" },
      { name: "PFF Player Grades", url: "https://www.pff.com/grades", desc: "Pro Football Focus graded analytics for every NFL player" },
      { name: "FanGraphs Leaderboards", url: "https://www.fangraphs.com/leaders/" },
      { name: "Natural Stat Trick (NHL)", url: "https://www.naturalstattrick.com", desc: "Advanced hockey analytics — Corsi, Fenwick, xG" },
      { name: "Cleaning The Glass (NBA)", url: "https://www.cleaningtheglass.com" },
      { name: "Football Outsiders / DVOA", url: "https://www.footballoutsiders.com/stats/nfl/team-efficiency" },
      { name: "Baseball Reference", url: "https://www.baseball-reference.com" },
      { name: "Basketball Reference", url: "https://www.basketball-reference.com" },
      { name: "Pro Football Reference", url: "https://www.pro-football-reference.com/" },
      { name: "Hockey Reference", url: "https://www.hockey-reference.com" },
      { name: "FBref (Soccer)", url: "https://fbref.com/en/" },
      { name: "TeamRankings", url: "https://www.teamrankings.com" },
      { name: "Stathead", url: "https://www.stathead.com" }
    ]
  },
  {
    zone: "DATA & RESEARCH",
    category: "Contracts & Salary Caps",
    icon: "💵",
    color: "green",
    tags: "contracts salary cap spotrac overthecap puckpedia nfl nba mlb nhl payroll transactions money",
    links: [
      { name: "Spotrac", url: "https://www.spotrac.com", top: true, desc: "Multi-sport contracts, salaries, cap space, and transactions" },
      { name: "OverTheCap (NFL)", url: "https://overthecap.com", desc: "The deepest NFL cap, contracts, and dead money resource" },
      { name: "PuckPedia (NHL)", url: "https://www.puckpedia.com", desc: "NHL salary cap tracking, contracts, LTIR — preferred by many analysts" },
      { name: "HoopsHype Salaries (NBA)", url: "https://hoopshype.com/salaries/" },
      { name: "Basketball Reference Contracts", url: "https://www.basketball-reference.com/contracts/" },
      { name: "Baseball Reference Contracts", url: "https://www.baseball-reference.com/friv/current-contracts.shtml" },
      { name: "MLB Transactions", url: "https://www.mlbtraderumors.com/transactions" },
      { name: "Pro Sports Transactions", url: "https://www.prosportstransactions.com/baseball/" }
    ]
  },
  {
    zone: "DATA & RESEARCH",
    category: "Historical Replay & Research",
    icon: "🏛",
    color: "purple",
    tags: "historical research retrosheet lahman sabr baseball reference stathead archives sim replay",
    links: [
      { name: "Retrosheet", url: "https://www.retrosheet.org", top: true },
      { name: "Lahman Baseball Database", url: "https://www.seanlahman.com/baseball-archive/statistics/" },
      { name: "SABR", url: "https://sabr.org" },
      { name: "Baseball Reference Historic Stats", url: "https://www.baseball-reference.com/players/" },
      { name: "Stathead", url: "https://www.stathead.com" },
      { name: "Baseball Almanac", url: "https://www.baseball-almanac.com" },
      { name: "The Baseball Cube", url: "https://www.thebaseballcube.com" }
    ]
  },

  // ═══ MEDIA ═══
  {
    zone: "MEDIA",
    category: "Team News & Beat Writers",
    icon: "📡",
    color: "red",
    tags: "beat writers team news local reporters transactions nfl nba mlb nhl insider athletic",
    links: [
      { name: "The Athletic — NFL", url: "https://theathletic.com/nfl/", top: true },
      { name: "The Athletic — MLB", url: "https://theathletic.com/mlb/" },
      { name: "The Athletic — NBA", url: "https://theathletic.com/nba/" },
      { name: "MLB Trade Rumors", url: "https://www.mlbtraderumors.com" },
      { name: "PFT Transactions", url: "https://profootballtalk.nbcsports.com/transactions/" },
      { name: "HoopsHype Rumors", url: "https://hoopshype.com/rumors/" },
      { name: "NHL News & Transactions", url: "https://www.nhl.com/news" },
      { name: "SB Nation NFL Teams", url: "https://www.sbnation.com/nfl" },
      { name: "SB Nation MLB Teams", url: "https://www.sbnation.com/mlb" },
      { name: "SB Nation NBA Teams", url: "https://www.sbnation.com/nba" },
      { name: "ESPN NFL Transactions", url: "https://www.espn.com/nfl/transactions" },
      { name: "ESPN MLB Transactions", url: "https://www.espn.com/mlb/transactions" }
    ]
  },
  {
    zone: "MEDIA",
    category: "Podcasts & Video",
    icon: "🎙",
    color: "teal",
    tags: "podcasts video youtube fantasy footballers ringer espn barstool cbs nba highlights",
    links: [
      { name: "The Fantasy Footballers (YT)", url: "https://www.youtube.com/@TheFantasyFootballers", top: true },
      { name: "FantasyPros Podcasts", url: "https://www.fantasypros.com/podcasts/" },
      { name: "Pitcher List Podcast", url: "https://www.pitcherlist.com/podcasts/" },
      { name: "The Ringer Podcasts", url: "https://www.theringer.com/podcasts" },
      { name: "ESPN YouTube", url: "https://www.youtube.com/@ESPN" },
      { name: "Barstool Shows", url: "https://www.barstoolsports.com/shows" },
      { name: "CBS Fantasy Podcast", url: "https://www.cbssports.com/fantasy/football/" },
      { name: "NBA Highlights (YT)", url: "https://www.youtube.com/@nba" }
    ]
  },
  {
    zone: "MEDIA",
    category: "Community & Forums",
    icon: "💬",
    color: "green",
    tags: "community forums reddit fantasy football baseball sportsbook nfl nba rotowire discord",
    links: [
      { name: "r/FantasyFootball", url: "https://www.reddit.com/r/fantasyfootball/", top: true },
      { name: "r/FantasyBaseball", url: "https://www.reddit.com/r/fantasybaseball/" },
      { name: "r/Sportsbook", url: "https://www.reddit.com/r/sportsbook/" },
      { name: "r/NFL", url: "https://www.reddit.com/r/nfl/" },
      { name: "r/NBA", url: "https://www.reddit.com/r/nba/" },
      { name: "r/Baseball", url: "https://www.reddit.com/r/baseball/" },
      { name: "RotoWire Forums", url: "https://www.rotowire.com/community/" },
      { name: "Discord — Fantasy Sports", url: "https://discord.gg/fantasyfootball" }
    ]
  },

  // ═══ DEVELOPMENT ═══
  {
    zone: "DEVELOPMENT",
    category: "Coaching & Drills",
    icon: "🏅",
    color: "orange",
    tags: "coaching drills youth baseball football basketball usa little league glazier driveline",
    links: [
      { name: "USA Baseball Coaching", url: "https://www.usabaseball.com/play/coach", top: true },
      { name: "Little League Coaching", url: "https://www.littleleague.org/university/articles/" },
      { name: "USA Football Coaching", url: "https://www.usafootball.com/coaching/" },
      { name: "USA Basketball Coaching", url: "https://www.usab.com/coaching.html" },
      { name: "CoachTube (All Sports)", url: "https://www.coachtube.com" },
      { name: "Breakthrough Basketball", url: "https://www.breakthroughbasketball.com" },
      { name: "Youth Football Online", url: "https://www.youthfootballonline.com" },
      { name: "Positive Coaching Alliance", url: "https://positivecoach.org" },
      { name: "Glazier Clinics (Football)", url: "https://www.glazierclinics.com" },
      { name: "Driveline Baseball", url: "https://drivelinebaseball.com" },
      { name: "HoopCoach", url: "https://www.hoopcoach.org" },
      { name: "Natl Alliance for Youth Sports", url: "https://www.nays.org" },
      { name: "Dominate The Diamond", url: "https://www.dominatethediamond.com" }
    ]
  },
  {
    zone: "DEVELOPMENT",
    category: "Prospects & Recruiting",
    icon: "🔭",
    color: "purple",
    tags: "prospects recruiting football basketball baseball hockey soccer 247 rivals on3 pipeline elite",
    links: [
      { name: "247Sports Football Recruiting", url: "https://247sports.com/football/", top: true },
      { name: "On3 Recruiting", url: "https://www.on3.com/db/rankings/" },
      { name: "Rivals Recruiting", url: "https://n.rivals.com", desc: "Football & basketball recruiting rankings and news" },
      { name: "247Sports Basketball Recruiting", url: "https://247sports.com/basketball/" },
      { name: "MLB Pipeline", url: "https://www.mlb.com/pipeline", desc: "Official MLB prospect rankings and farm system grades" },
      { name: "Baseball America Prospects", url: "https://www.baseballamerica.com/top-100-prospects/" },
      { name: "Perfect Game (Baseball/Softball)", url: "https://www.perfectgame.org", desc: "Largest youth baseball scouting and showcase organization" },
      { name: "Prep Baseball Report", url: "https://www.prepbaseballreport.com" },
      { name: "Prospects Live", url: "https://www.prospectslive.com" },
      { name: "Elite Prospects (Hockey)", url: "https://www.eliteprospects.com", desc: "The definitive hockey prospect and player database" },
      { name: "Transfermarkt (Soccer Prospects)", url: "https://www.transfermarkt.com" }
    ]
  },
  {
    zone: "DEVELOPMENT",
    category: "Officials & Umpires",
    icon: "🟡",
    color: "orange",
    tags: "officials umpires referees training certification gear uniforms baseball football basketball soccer tennis nfhs little league",
    links: [
      { name: "Little League Umpire Resources", url: "https://www.littleleague.org/university/umpires/", top: true, desc: "Training materials, mechanics, and certification for LL umpires" },
      { name: "NFHS Learn — Officials Courses", url: "https://nfhslearn.com/courses?filter=officials", desc: "Online certification and training for high school sports officials" },
      { name: "USA Football — Officials Education", url: "https://www.usafootball.com/education/" },
      { name: "U.S. Soccer Referee Program", url: "https://www.ussoccer.com/referees" },
      { name: "USTA Officiating (Tennis)", url: "https://www.usta.com/en/home/about-usta/officiating.html" },
      { name: "USATT Officials / Certification", url: "https://www.teamusa.org/USA-Table-Tennis/Officiate" },
      { name: "USA Pickleball Officials", url: "https://www.usapickleball.org/play/officials/" },
      { name: "NFHS Officials Association", url: "https://www.nfhs.org/resources/officials/" },
      { name: "UmpireBible", url: "https://www.umpirebible.com", desc: "Rules education & mechanics for baseball umpires — batting, base running, interference & more" },
      { name: "Umpire Empire (Forums)", url: "https://www.umpire-empire.com", desc: "Active community with 60k+ posts — includes \"Ask the Umpire\" Q&A forum" },
      { name: "Ump-Attire (Gear & Uniforms)", url: "https://www.ump-attire.com", desc: "Baseball/softball umpire equipment and uniforms" },
      { name: "Official Sports International", url: "https://www.officialsports.com", desc: "Multi-sport officials uniforms and apparel — NFHS apparel partner" },
      { name: "The Referee Store", url: "https://www.refereestore.com", desc: "Soccer, football, basketball & baseball officials gear — uniforms, whistles, flags & more" }
    ]
  },
  {
    zone: "DEVELOPMENT",
    category: "Rules & Officiating",
    icon: "📖",
    color: "orange",
    tags: "rules rulebooks officiating replay review mlb nfl nba nhl ncaa nfhs pickleball tennis fia formula 1 little league video",
    links: [
      { name: "MLB Official Baseball Rules", url: "https://www.mlb.com/glossary/rules", top: true, desc: "Official MLB rulebook" },
      { name: "NFL Official Rulebook", url: "https://operations.nfl.com/the-rules/nfl-rulebook/", desc: "NFL Football Operations rules hub plus yearly rule changes" },
      { name: "NBA Official Rulebook", url: "https://official.nba.com/rulebook/", desc: "NBA rules hub including video rulebook interpretations" },
      { name: "NHL Official Rulebook", url: "https://www.nhl.com/info/nhl-rulebook" },
      { name: "NFHS Rules Books (HS Sports)", url: "https://www.nfhs.org/activities-sports/sports/" },
      { name: "Little League Official Rules", url: "https://www.littleleague.org/playing-rules/" },
      { name: "NCAA Rules Resources", url: "https://www.ncaa.org/sports/2021/8/9/ncaa-rules.aspx" },
      { name: "USA Pickleball Official Rulebook", url: "https://www.usapickleball.org/rules/official-rules-of-pickleball/" },
      { name: "USATT Rules of Table Tennis", url: "https://www.teamusa.org/USA-Table-Tennis/Rules" },
      { name: "USTA Friend at Court (Tennis Rules)", url: "https://www.usta.com/en/home/about-usta/officiating.html" },
      { name: "FIA Regulations Hub", url: "https://www.fia.com/regulations", desc: "Formula 1 and motorsport sporting regulations" },
      { name: "NFL Officiating News & Video", url: "https://operations.nfl.com/officiating/officiating-video/" },
      { name: "NBA Video Rulebook", url: "https://official.nba.com/rulebook/" },
      { name: "MLB Replay Review", url: "https://www.mlb.com/video/topic/replay-review" },
      { name: "NHL Situation Room", url: "https://www.nhl.com/fans/nhl-situation-room" },
      { name: "MLB Umpire Scorecards", url: "https://umpscorecards.com", desc: "Grades every MLB umpire's strike zone accuracy — a hidden gem" }
    ]
  },
  {
    zone: "DEVELOPMENT",
    category: "Minor Leagues & Player Development",
    icon: "🧢",
    color: "green",
    tags: "minor leagues player development milb g league ahl echl chl usl mls next pro f2 indy nxt nascar xfinity baseball basketball hockey soccer racing pipeline",
    links: [
      { name: "Minor League Baseball (MiLB)", url: "https://www.milb.com", top: true, desc: "Official hub for all affiliated MiLB — Triple-A through Single-A" },
      { name: "Triple-A Baseball", url: "https://www.milb.com/teams?level=AAA" },
      { name: "Double-A Baseball", url: "https://www.milb.com/teams?level=AA" },
      { name: "Atlantic League (Independent)", url: "https://www.atlanticleague.com" },
      { name: "Frontier League (Independent)", url: "https://www.frontierleague.com" },
      { name: "American Association (Ind.)", url: "https://www.americanassociationbaseball.com" },
      { name: "NBA G League", url: "https://gleague.nba.com", desc: "Official NBA development league — call-up tracker and rosters" },
      { name: "EuroLeague", url: "https://www.euroleague.net" },
      { name: "AHL — American Hockey League", url: "https://theahl.com", desc: "Primary NHL development league" },
      { name: "ECHL", url: "https://www.echl.com" },
      { name: "CHL — Canadian Hockey League", url: "https://www.chl.ca", desc: "Umbrella for OHL, WHL, and QMJHL junior leagues" },
      { name: "MLS NEXT Pro", url: "https://www.mlsnextpro.com" },
      { name: "USL Championship", url: "https://www.uslchampionship.com", desc: "USL second and third division — full league structure explained" },
      { name: "FIA Formula 2", url: "https://www.fiaformula2.com" },
      { name: "Indy NXT", url: "https://www.indynxt.com" },
      { name: "NASCAR Xfinity Series", url: "https://www.nascar.com/xfinity-series/" },
      { name: "NASCAR Truck Series", url: "https://www.nascar.com/craftsman-truck-series/" }
    ]
  },
  {
    zone: "DEVELOPMENT",
    category: "Sports Business & Media",
    icon: "📰",
    color: "blue",
    tags: "sports business media journalism front office sbj sportico athletic defector awful announcing nil industry",
    links: [
      { name: "Sports Business Journal", url: "https://www.sportsbusinessjournal.com", top: true, desc: "The industry bible for sports business, deals, and media rights" },
      { name: "Front Office Sports", url: "https://frontofficesports.com", desc: "Daily sports business news — media rights, sponsorships, finance" },
      { name: "Sportico", url: "https://www.sportico.com", desc: "Sports finance and valuation — team values, contracts, market analysis" },
      { name: "The Athletic", url: "https://theathletic.com" },
      { name: "Defector", url: "https://defector.com", desc: "Independently owned sports journalism — long-form and sharp" },
      { name: "Awful Announcing", url: "https://awfulannouncing.com", desc: "Sports media criticism and broadcast industry coverage" },
      { name: "On3 NIL", url: "https://www.on3.com/nil/", desc: "NIL valuations, deal tracker, and college athlete brand rankings" },
      { name: "Athletic Director U", url: "https://www.athleticdirectoru.com", desc: "College athletics administration, NIL, and industry news" }
    ]
  },

  // ═══ SHOP & TICKETS ═══
  {
    zone: "SHOP & TICKETS",
    category: "Fan Gear & Apparel",
    icon: "🏷️",
    color: "teal",
    tags: "shop tickets fan gear apparel fanatics stubhub seatgeek vivid seats ticketmaster",
    links: [
      { name: "Fanatics", url: "https://www.fanatics.com", top: true },
      { name: "NFL Shop", url: "https://www.nflshop.com", tag: "OFFER" },
      { name: "MLB Shop", url: "https://www.mlbshop.com" },
      { name: "NBA Store", url: "https://www.nbastore.com" },
      { name: "NHL Shop", url: "https://www.nhlshop.com" }
    ]
  },
  {
    zone: "SHOP & TICKETS",
    category: "Tickets & Events",
    icon: "🎟️",
    color: "orange",
    tags: "tickets stubhub seatgeek vivid seats ticketmaster travel",
    links: [
      { name: "StubHub", url: "https://www.stubhub.com", top: true },
      { name: "SeatGeek", url: "https://www.seatgeek.com", tag: "PROMO" },
      { name: "Vivid Seats", url: "https://www.vividseats.com" },
      { name: "Ticketmaster", url: "https://www.ticketmaster.com" }
    ]
  },

  // ═══ SPORTS & LEAGUES ═══
  {
    zone: "SPORTS & LEAGUES",
    category: "Official League Sites",
    icon: "🏟",
    color: "blue",
    tags: "official league sites nfl nba mlb nhl ncaa mls pga tour nascar ufc mma boxing olympics team usa world athletics track",
    links: [
      { name: "NFL.com", url: "https://www.nfl.com", top: true },
      { name: "NBA.com", url: "https://www.nba.com" },
      { name: "MLB.com", url: "https://www.mlb.com" },
      { name: "NHL.com", url: "https://www.nhl.com" },
      { name: "NCAA.com", url: "https://www.ncaa.com" },
      { name: "MLS Soccer", url: "https://www.mlssoccer.com" },
      { name: "PGA Tour", url: "https://www.pgatour.com" },
      { name: "NASCAR", url: "https://www.nascar.com/" },
      { name: "UFC", url: "https://www.ufc.com" },
      { name: "Team USA", url: "https://www.teamusa.com", desc: "Official US Olympic & Paralympic Committee site" },
      { name: "World Athletics", url: "https://worldathletics.org", desc: "Global governing body for track & field" },
      { name: "FloTrack", url: "https://www.flotrack.org", desc: "Track & field news, results, and streaming" }
    ]
  },
  {
    zone: "SPORTS & LEAGUES",
    category: "College Sports",
    icon: "🎓",
    color: "blue",
    tags: "college sports football basketball espn kenpom bart torvik 247 rivals on3 recruiting",
    links: [
      { name: "ESPN College Football", url: "https://www.espn.com/college-football/", top: true },
      { name: "ESPN College Basketball", url: "https://www.espn.com/mens-college-basketball/" },
      { name: "KenPom Rankings", url: "https://kenpom.com/index.php" },
      { name: "Bart Torvik (CBB)", url: "https://www.barttorvik.com" },
      { name: "247Sports (Recruiting)", url: "https://www.247sports.com/" },
      { name: "Rivals", url: "https://www.rivals.com" },
      { name: "On3 Sports", url: "https://www.on3.com/" },
      { name: "College Football News", url: "https://www.collegefootballnews.com" }
    ]
  },
  {
    zone: "SPORTS & LEAGUES",
    category: "NCAA & College Conferences",
    icon: "🏛",
    color: "purple",
    tags: "college conferences ncaa sec big ten acc big 12 pac 12 big east american athletic sun belt mac mountain west conference usa cusa wac missouri valley",
    links: [
      { name: "NCAA.com", url: "https://www.ncaa.com", top: true },
      { name: "NCAA.org (Governance)", url: "https://www.ncaa.org" },
      { name: "SEC", url: "https://www.secsports.com" },
      { name: "Big Ten", url: "https://bigten.org" },
      { name: "ACC", url: "https://theacc.com" },
      { name: "Big 12", url: "https://big12sports.com" },
      { name: "Big East", url: "https://www.bigeast.com" },
      { name: "American Athletic Conference", url: "https://theamerican.org" },
      { name: "Mountain West", url: "https://www.mountainwest.org" },
      { name: "Sun Belt", url: "https://www.sunbeltsports.org" },
      { name: "MAC (Mid-American)", url: "https://www.mac-sports.com" },
      { name: "Conference USA", url: "https://conferenceusa.com" },
      { name: "Missouri Valley Conference", url: "https://www.mvc-sports.com" },
      { name: "WAC (Western Athletic)", url: "https://www.wac.org" },
      { name: "Southern Conference", url: "https://www.socon.org" },
      { name: "Big South", url: "https://www.bignorthernconference.com" },
      { name: "Patriot League", url: "https://www.patriotleague.org" },
      { name: "Ivy League", url: "https://www.ivy-league.com" }
    ]
  },
  {
    zone: "SPORTS & LEAGUES",
    category: "Soccer & International",
    icon: "⚽",
    color: "teal",
    tags: "soccer international premier league mls goal fotmob fbref understat transfermarkt sofascore",
    links: [
      { name: "Premier League", url: "https://www.premierleague.com", top: true },
      { name: "MLS Soccer", url: "https://www.mlssoccer.com" },
      { name: "Goal.com", url: "https://www.goal.com" },
      { name: "FotMob", url: "https://www.fotmob.com" },
      { name: "FBref", url: "https://fbref.com/en/" },
      { name: "Understat (xG)", url: "https://understat.com" },
      { name: "Transfermarkt", url: "https://www.transfermarkt.com" },
      { name: "SofaScore", url: "https://www.sofascore.com" }
    ]
  },
  {
    zone: "SPORTS & LEAGUES",
    category: "Golf",
    icon: "⛳",
    color: "green",
    tags: "golf pga tour golf digest golf channel espn golf golfnow usga liv fantasy",
    links: [
      { name: "PGA Tour", url: "https://www.pgatour.com", top: true },
      { name: "Golf.com", url: "https://www.golf.com" },
      { name: "Golf Digest", url: "https://www.golfdigest.com/" },
      { name: "Golf Channel", url: "https://www.golfchannel.com" },
      { name: "ESPN Golf", url: "https://www.espn.com/golf/" },
      { name: "GolfNow (Tee Times)", url: "https://www.golfnow.com" },
      { name: "USGA", url: "https://www.usga.org/content/usga/home-page.html" },
      { name: "LIV Golf", url: "https://www.livgolf.com" },
      { name: "DP World Tour", url: "https://www.dpwtour.com" },
      { name: "Fantasy National (Golf)", url: "https://www.fantasynational.com" },
      { name: "Golfweek", url: "https://www.golfweek.com" }
    ]
  },
  {
    zone: "SPORTS & LEAGUES",
    category: "Tennis / Pickleball / Racket Sports",
    icon: "🎾",
    color: "green",
    tags: "tennis pickleball table tennis usta atp wta rules instruction equipment paddle racket squash badminton mltt ratings central",
    links: [
      { name: "USTA — Tennis", url: "https://www.usta.com", top: true, desc: "Rules, leagues, instruction, and player resources" },
      { name: "ATP Tour", url: "https://www.atptour.com" },
      { name: "WTA Tour", url: "https://www.wtatennis.com" },
      { name: "Tennis Abstract (Stats)", url: "https://www.tennisabstract.com" },
      { name: "Tennis.com (News & Instruction)", url: "https://www.tennis.com" },
      { name: "USA Pickleball", url: "https://www.usapickleball.org", desc: "Official governing body — rules, events, instruction, ratings" },
      { name: "Pickleball Central (Gear)", url: "https://www.pickleballcentral.com" },
      { name: "PPA Tour (Pro Pickleball)", url: "https://www.ppatour.com" },
      { name: "USATT — Table Tennis", url: "https://www.teamusa.org/USA-Table-Tennis", desc: "Rules, rankings, officials certification, and events" },
      { name: "ITTF (International Table Tennis)", url: "https://www.ittf.com" },
      { name: "World Table Tennis", url: "https://worldtabletennis.com" },
      { name: "Major League Table Tennis", url: "https://www.mltt.com" },
      { name: "RatingsCentral (Table Tennis)", url: "https://www.ratingscentral.com", desc: "Global table tennis player ratings and tournament results" },
      { name: "US Squash", url: "https://www.ussquash.org", desc: "Official governing body for squash in the US" },
      { name: "USA Badminton", url: "https://www.usabadminton.org" }
    ]
  },
  {
    zone: "SPORTS & LEAGUES",
    category: "Motorsports & Racing",
    icon: "🏎",
    color: "red",
    tags: "motorsports racing formula 1 f1 nascar indycar motogp fia sports cars",
    links: [
      { name: "Formula 1 Official Site", url: "https://www.formula1.com", top: true, desc: "News, standings, race results, and driver stats" },
      { name: "FIA Regulations Hub", url: "https://www.fia.com/regulations", desc: "Official F1 and motorsport sporting regulations" },
      { name: "NASCAR Official Site", url: "https://www.nascar.com/" },
      { name: "IndyCar Official Site", url: "https://www.indycar.com" },
      { name: "MotoGP Official Site", url: "https://www.motogp.com" },
      { name: "Motorsport.com (News)", url: "https://www.motorsport.com" },
      { name: "Autosport", url: "https://www.autosport.com" },
      { name: "RaceFans (F1 Analysis)", url: "https://www.racefans.net" },
      { name: "ESPN Racing", url: "https://www.espn.com/racing/" },
      { name: "Dirt Track Racing", url: "https://www.dirtvision.com" }
    ]
  },
  {
    zone: "SPORTS & LEAGUES",
    category: "Boxing & MMA",
    icon: "🥊",
    color: "red",
    tags: "boxing mma ufc combat sports boxing scene ring magazine sherdog tapology mma junkie mma mania boxrec",
    links: [
      { name: "UFC Official Site", url: "https://www.ufc.com", top: true },
      { name: "Sherdog", url: "https://www.sherdog.com", desc: "MMA news, fighter database, and event results" },
      { name: "Tapology", url: "https://www.tapology.com", desc: "MMA event listings, fighter rankings, and community picks" },
      { name: "MMA Junkie", url: "https://www.mmajunkie.com" },
      { name: "MMA Mania", url: "https://www.mmamania.com" },
      { name: "BoxRec", url: "https://www.boxrec.com", desc: "The definitive boxing records database — every pro fight ever" },
      { name: "Ring Magazine", url: "https://www.ringmagazine.com", desc: "The Bible of Boxing since 1922" },
      { name: "Boxing Scene", url: "https://www.boxingscene.com" },
      { name: "Boxing News Online", url: "https://www.boxingnewsonline.net" }
    ]
  },
  {
    zone: "SPORTS & LEAGUES",
    category: "Outdoor & Recreational Sports",
    icon: "🎣",
    color: "teal",
    tags: "outdoor recreational fishing hunting running cycling trail hiking",
    links: [
      { name: "Field & Stream", url: "https://www.fieldandstream.com", top: true },
      { name: "Fly Fisherman", url: "https://www.flyfisherman.com" },
      { name: "Take Me Fishing", url: "https://www.takemefishing.org" },
      { name: "Bassmaster", url: "https://www.bassmaster.com" },
      { name: "Outdoor Life (Hunting)", url: "https://www.outdoorlife.com" },
      { name: "Bowhunter", url: "https://www.bowhunter.com" },
      { name: "Runner's World", url: "https://www.runnersworld.com" },
      { name: "Bicycling Magazine", url: "https://www.bicycling.com" },
      { name: "Outside Online", url: "https://www.outsideonline.com" },
      { name: "AllTrails (Hiking)", url: "https://www.alltrails.com" }
    ]
  },

  // ═══ SIMULATION ═══
  {
    zone: "SIMULATION",
    category: "Sports Simulation — Digital",
    icon: "🎮",
    color: "purple",
    tags: "sports simulation digital ootp franchise hockey football manager front office baseball mogul",
    links: [
      { name: "OOTP Baseball", url: "https://www.ootpdevelopments.com", top: true, desc: "The gold standard of baseball simulation games" },
      { name: "Franchise Hockey Manager", url: "https://www.ootpdevelopments.com/franchise-hockey-manager/", desc: "Deep hockey sim by the OOTP team" },
      { name: "Football Manager", url: "https://www.footballmanager.com", desc: "The world's most popular soccer management sim" },
      { name: "Draft Day Sports / FOF", url: "https://www.wolverinestudios.com", desc: "NFL and multi-sport franchise simulations" },
      { name: "Baseball Mogul", url: "https://www.sportsmogul.com" },
      { name: "r/OOTP", url: "https://www.reddit.com/r/OOTP/" }
    ]
  },
  {
    zone: "SIMULATION",
    category: "Sports Simulation — Tabletop",
    icon: "🎲",
    color: "blue",
    tags: "sports simulation tabletop strat-o-matic apba pursue pennant strategy board game replay",
    links: [
      { name: "Strat-O-Matic", url: "https://www.strat-o-matic.com", top: true, desc: "The classic tabletop baseball/football/basketball sim since 1961" },
      { name: "APBA Games", url: "https://www.apbagames.com", desc: "Classic tabletop baseball and football games" },
      { name: "Pursue the Pennant", url: "https://www.pursueThePennant.com" },
      { name: "r/StratOMatic", url: "https://www.reddit.com/r/StratOMatic/" },
      { name: "r/TabletopSports", url: "https://www.reddit.com/r/tabletopsports/" }
    ]
  }
];
