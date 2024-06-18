import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import Buscador from "./Buscador";
import DrinkCard from "./Drinkcard";

function MiApi() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        let sortedData = result.drinks || [];
        if (sortOrder === "asc") {
          sortedData.sort((a, b) => a.strDrink.localeCompare(b.strDrink));
        } else {
          sortedData.sort((a, b) => b.strDrink.localeCompare(a.strDrink));
        }

        setData(sortedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, query, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return <Alert variant="danger">Error: {error.message}</Alert>;
  }

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Buscador query={query} setQuery={setQuery} />
        </Col>
        <Col className="text-end">
          <button className="btn btn-primary" onClick={toggleSortOrder}>
            {sortOrder === "asc" ? "Sort Desc" : "Sort Asc"}
          </button>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4">
        {data.map((drink) => (
          <Col key={drink.idDrink}>
            <DrinkCard drink={drink} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MiApi;
