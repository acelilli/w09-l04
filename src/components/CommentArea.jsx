import React, { Component } from "react";
import ListGroup, { ListGroupItem } from "react-bootstrap";
// import CommentsList from "./CommentsList";
// import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    loading: false,
    error: null,
  };
  componentDidMount = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NThhZWFhYThjOWNlZDAwMTg4MzEwZTYiLCJpYXQiOjE3MDM2MDI4NTgsImV4cCI6MTcwNDgxMjQ1OH0.WhX4yu8trW2PtxM-v_0qgeKErtaSw3T6IRBZjPtmZ84",
        },
      });
      if (response.ok) {
        console.log("Data:", data);
        const data = await response.json();
        this.setState({ comments: data, loading: false });
      } else {
        throw new Error("Error loading comments");
      }
    } catch (error) {
      console.log(Error, "comments fetch error");
    }

    // onDelete da definire
  };
  render() {
    return (
      <>
        {this.state.comments.length > 0 ? (
          <ListGroup variant="flush" style={{ marginTop: "1rem", overflowY: "scroll" }}>
            {/*QUESTO DEVE DIVENTARE COMMENT LIST*/}
            {this.state.comments.map((comment) => (
              <ListGroup.Item key={comment._id}>
                <CommentItself comment={comment} />
              </ListGroup.Item>
            ))}
            {/*FINE COMMENT LIST*/}
          </ListGroup>
        ) : (
          <p>No reviews for this title</p>
        )}

        {/* QUI ADD COMMENT CON IL FORM */}
        {/* Assicurati di includere il codice per aggiungere commenti qui */}

        {/* FINE COMMENT AREA */}
      </>
    );
  }
}
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
