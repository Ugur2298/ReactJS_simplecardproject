import 'bulma/css/bulma.css'
import './App.css';
import  Course  from './Course';
import Naruto from './images/naruto.jpg'
import Sasuke from './images/sasuke uchica.jpg'
import Orochimaru from './images/orochimaru.jpg'

function App() {
  return (
    <div>
      <div className="container">
       <section className='section'>
       <div className="columns">
          <div className="column">
            <Course
            image={Naruto}
            title="Naruto Uzumaki"
            description="Naruto Uzumaki (Japanese: うずまき ナルト, Hepburn: Uzumaki Naruto) (/ˈnɑːrətoʊ/) is the 
            titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, 
            he is a young ninja from the fictional village of Konohagakure (Hidden Leaf Village). 
            The villagers ridicule and ostracize Naruto on account of the Nine-Tailed Demon Fox—a 
            malevolent creature that attacked Konohagakure—that was sealed away in Naruto's body. 
            Despite this, he aspires to become his village's leader, the Hokage, in order to receive their approval. 
            His carefree, optimistic, and boisterous personality enables him to befriend other 
            Konohagakure ninja, as well as ninja from other villages. Naruto appears in the series' 
            films and in other media related to the franchise, including video games and original 
            video animations (OVA), as well as the sequel Boruto: Naruto Next Generations, where he is the Hokage, 
            and his son, Boruto Uzumaki, is the protagonist."
      
      
          />
        </div>

        <div className="column">
        <Course
      image={Sasuke}
        title="Sasuke Uchica"
        description="Sasuke Uchiha (Japanese: うちは サスケ, Hepburn: Uchiha Sasuke) 
        (/ˈsɑːskeɪ/) is a fictional character in the Naruto manga and anime franchise created by 
        Masashi Kishimoto. Sasuke belongs to the Uchiha clan, a notorious ninja family, and one of 
        the most powerful, allied with Konohagakure (木ノ葉隠れの里, English version: Hidden Leaf 
        Village Most of its members were massacred by Sasukes older brother Itachi Uchiha before 
        the series began leaving Sasuke one of the few living Despite becoming empathetic toward 
        his teammates Naruto Uzumaki and Sakura Haruno, Sasukes feelings of powerlessness force 
        him to abandon his friends and his home in his quest to become stronger, and to find Orochimaru.
        Sasuke appears in several of the series animated feature films and related media, including 
        video games, original video animations OVAs, and Boruto: Naruto the Movie 2015 and its manga sequel, 
        Boruto: Naruto Next Generations 2016, in which he is depicted as a vigilante supporting his village 
        and a mentor to Naruto's son Boruto Uzumaki"
      
      />
        </div>

        <div className="column">
        <Course
       image={Orochimaru}
       title="Orochimaru"
       description="Orochimaru (大蛇丸), featured in the Japanese folktale Jiraiya Gōketsu Monogatari 
       (The Tale of the Gallant Jiraiya), is the archenemy of the ninja Jiraiya.[2] He was once named 
       Yashagorō (夜叉五郎) and was one of Jiraiya's followers but was overtaken by serpent magic. 
       Having changed his name to Orochimaru, he gained the ability to turn himself into a giant serpent. 
       He poisoned Jiraiya and Tsunade the slug princess by pouring his venom on them as they slept, 
       only for another follower to save the couple's lives afterwards.[citation needed] The story, 
       first recorded in 1806, was adapted into a mid-19th-century serialized novel 
       (43 installments, 1839–1868) and a kabuki drama, based on the first 10 installments, 
       by Kawatake Mokuami, in 1852. In the 20th-century the story was adapted in several 
       films in video games and in a manga."
      
      />
        </div>
        </div>
       </section>
      </div>
    
      
      
      <Course/>
    </div>
  );
}

export default App;
