import React from 'react';
import './App.css';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import Photo from '../photo/Photo';


class App extends React.Component {
  render() {


    return (
     
      <div className="App">
  
        <header id="pageHeader"> <Header /></header>
        <main id="pageMain"> <Main /></main>
        <photo id="pagePhoto"> <Photo /></photo>
        <footer id="pageFooter"> <Footer /></footer>

      </div>

   
    
 
     //<body> <script src="/__/firebase/7.21.1/firebase-app.js"></script> <script src="/__/firebase/init.js"></script>  </body>  
    );
  }
}

export default App;
