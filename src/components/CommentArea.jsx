import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import CommentList from "./CommentList";

class CommentArea extends Component {
  /* Inizializzazione  STATO INIZIALE
in cui l'array di comments è vuoto,
loading è un boolean 
e error è null */
  state = {
    comments: [],
    loading: false,
    error: null,
  };
  /* QUI SI FA LA FETCH
  ossia, una volta che il DOM ha caricato i suoi componenti viene fatta la fetch (per questo è ASINCRONA).
  Lo stato viene cambiato su TRUE
  */
  componentDidMount = async () => {
    this.setState({ loading: true, error: null });
    {
      /*FETCH VERA E PROPRIA CHE PARTE DA QUI. In cui:
       vengono collegati i commenti relativi ad un libro specifico ( ${this.props.bookId} )
      SE vengono trovati vengono caricati, altrimenti stampa un messaggio di errore */
    }
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NThhZWFhYThjOWNlZDAwMTg4MzEwZTYiLCJpYXQiOjE3MDM2MDI4NTgsImV4cCI6MTcwNDgxMjQ1OH0.WhX4yu8trW2PtxM-v_0qgeKErtaSw3T6IRBZjPtmZ84",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Data:", data);
        this.setState({ comments: data, loading: false });
      } else {
        console.log("Error loading comments");
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
      this.setState({ error, loading: false });
    }
    /* Avevo un errore "Error fetching data: Cannot access 'data' before initialization" 
    In pratica stavo cercando di stampare i dati PRIMA di aver fatto il parse del corpo della risposta JSON.
    E' bastato invertire delle righe nell'if del try*/

    // onDelete da definire
  };

  // RENDERIZZIAMO GLI ELEMENTI
  /*  */
  render() {
    const { loading, error, comments } = this.state;

    return (
      <>
        {error && <p>Error fetching data: {error.message}</p>}
        {/* Se loading è true, viene visualizzato un messaggio di caricamento. Se error è presente, viene visualizzato un messaggio di errore. */}
        {/* Se ci sono commenti, viene mostrato un elenco (ListGroup) di commenti utilizzando il componente CommentList. Altrimenti, viene mostrato un messaggio che indica l'assenza di recensioni. */}
        {loading ? (
          <p>Loading...</p>
        ) : comments.length > 0 ? (
          <div style={{ height: "200px", marginTop: "1rem", overflowY: "scroll" }}>
            <ListGroup variant="flush" style={{}}>
              <CommentList comments={comments} />
            </ListGroup>
          </div>
        ) : (
          <p>No comments available</p>
        )}

        {/* QUI ADD COMMENT CON IL FORM */}
        {/* Includere il codice per aggiungere commenti qui */}

        {/* FINE COMMENT AREA */}
      </>
    );
  }
}

export default CommentArea;

// Che contiene
// Comment List
// AddComment

// CommentArea appare quando si preme il bottone SELECTED di SingleBook
//  Quando l'utente cliccherà su un SingleBook (quindi quando la proprietà selected nel suo stato diventa true), i commenti dovranno apparire

// import { Card } from "react-bootstrap";

// class CommentArea extends {
//     state= {}
//     render(
//         return()
//     )

// }
