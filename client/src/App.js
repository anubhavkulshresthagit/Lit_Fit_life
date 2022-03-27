import "./App.css";
import Header from "./components/Navbar/Header";
import Home from "./screens/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UploadScreen from "./screens/UploadScreen/UploadScreen";
import WallScreen from "./screens/WallScreen/WallScreen";
import Footer from "./components/Footer/Footer";
import ImageScreen from './screens/ImageScreen/ImageScreen';
import BlogScreen from './screens/BlogScreen/BlogScreen';
import AddPostScreen from './screens/AddPostScreen/AddPostScreen';
import ChallengeYourFriend from "./screens/ChallengeYourFriend/ChallengeYourFriend";
import WorkoutMotivation from "./screens/WorkoutMotivation/WorkoutMotivation";
function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/upload" component={() => <UploadScreen />} />:
            <Route exact path="/wall" component={() => <WallScreen />} />
            <Route exact path='/images/:id' component={() => <ImageScreen />} />
            <Route exact path='/addpost' component={() => <AddPostScreen />} />
            <Route exact path='/blog' component={() => <BlogScreen />} />     
            <Route exact path='/challenge' component={() => <ChallengeYourFriend />} />     
            <Route exact path='/motivation' component={() => <WorkoutMotivation />} />     

          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
