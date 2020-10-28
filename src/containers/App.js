import React, {Component} from 'react';
import './App.css';
import Checkbox from "../components/Checkbox";
import CardList from "../components/Cards";
import {FaPlus, FaRegTrashAlt} from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  cardsArr = [
    {
      title: "What is Lorem Ipsum?",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been " +
        "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type " +
        "and scrambled it to make a type specimen book. It has survived not only five centuries, but also the " +
        "leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with " +
        "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing " +
        "software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: "Why do we use it?",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when " +
        "looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of " +
        "letters, as opposed to using 'Content here, content here', making it look like readable English. Many " +
        "desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a " +
        "search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved " +
        "over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },
    {
      title: "Where does it come from?",
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of " +
        "classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin " +
        "professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, " +
        "consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, " +
        "discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus " +
        "Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise " +
        "on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem " +
        "ipsum dolor sit amet..\", comes from a line in section 1.10.32."
    },
    {
      title: "Where can I get some?",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered " +
        "alteration in some form, by injected humour, or randomised words which don't look even slightly " +
        "believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything " +
        "embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat " +
        "predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary " +
        "of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum " +
        "which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected " +
        "humour, or non-characteristic words etc."
    },
    {
      title: "The standard Lorem Ipsum passage, used since the 1500s",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore " +
        "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
        "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu " +
        "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt " +
        "mollit anim id est laborum."
    },
    {
      title: "Section 1.10.32 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, " +
        "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta " +
        "sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia " +
        "consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui " +
        "dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora " +
        "incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum " +
        "exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem " +
        "vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui " +
        "dolorem eum fugiat quo voluptas nulla pariatur?"
    },
    {
      title: "1914 translation by H. Rackham",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was " +
        "born and I will give you a complete account of the system, and expound the actual teachings of the great " +
        "explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure " +
        "itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally " +
        "encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or " +
        "desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in " +
        "which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever " +
        "undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to " +
        "find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids " +
        "a pain that produces no resultant pleasure?"
    },
    {
      title: "Section 1.10.33 of \"de Finibus Bonorum et Malorum\", written by Cicero in 45 BC",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum " +
        "deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, " +
        "similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    }
  ];

  state = {
    isView: false,
    cards: this.cardsArr.map(card => {
      return {
        id: uuidv4(),
        title: card.title,
        text: card.text,
        isChecked: false,
        isEdit: false
      };
    })
  };

  viewHandler = (event) => {
    this.setState({isView: event.target.checked});
  }

  checkHandler = (event, id) => {
    const cardIndex = this.state.cards.findIndex(card => card.id === id);
    const card = {...this.state.cards[cardIndex]};
    card.isChecked = event.target.checked;
    const cards = [...this.state.cards];
    cards[cardIndex] = card;
    this.setState({cards: cards});
  }

  editHandler = (id, isEdit) => {
    const cardIndex = this.state.cards.findIndex(card => card.id === id);
    const card = {...this.state.cards[cardIndex]};
    card.isChecked = false;
    card.isEdit = isEdit;
    const cards = [...this.state.cards];
    cards[cardIndex] = card;
    this.setState({cards: cards});
  }

  addHandler = () => {
    const newCard = {
      id: uuidv4(),
      title: "",
      text: "",
      isChecked: false,
      isEdit: true
    };
    const cards = [...this.state.cards];
    cards.unshift(newCard);
    this.setState({cards: cards});
  }

  deleteHandler = () => {
    const cards = [...this.state.cards].filter(card => !card.isChecked);
    this.setState({cards: cards});
  }

  changeContent = (id, title, text) => {
    const cardIndex = this.state.cards.findIndex(card => card.id === id);
    const card = {...this.state.cards[cardIndex]};
    card.title = title;
    card.text = text;
    card.isEdit = false;
    const cards = [...this.state.cards];
    cards[cardIndex] = card;
    this.setState({cards: cards});
  }

  uncheckCard = (id) => {
    const cardIndex = this.state.cards.findIndex(card => card.id === id);
    const card = {...this.state.cards[cardIndex]};
    card.isChecked = false;
    const cards = [...this.state.cards];
    cards[cardIndex] = card;
    this.setState({cards: cards});
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>ReactJS header</h1>
        </header>
        <div className="app-controls">
          <label className="app-control">
            <Checkbox
              className="app-control-checkbox-view"
              checked={this.state.isView}
              onChange={this.viewHandler}
            />
            <span className="app-control-text">Только просмотр</span>
          </label>
          <div className="app-control" onClick={this.addHandler}>
            <FaPlus className="app-control-icon app-control-icon-add"/>
            <span className="app-control-text">Создать новую карточку</span>
          </div>
          <div className="app-control" onClick={this.deleteHandler}>
            <FaRegTrashAlt className="app-control-icon app-control-icon-remove"/>
            <span className="app-control-text">Удалить выбранные карточки</span>
          </div>
        </div>
        <main className="App-content">
          <CardList
            cards={this.state.cards}
            isView={this.state.isView}
            checkHandler={this.checkHandler}
            editHandler={this.editHandler}
            changeContent={this.changeContent}
            uncheckCard={this.uncheckCard}
          />
        </main>
      </div>
    );

  }

}

export default App;
