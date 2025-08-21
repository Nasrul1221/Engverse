import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import headphones from '../../assets/Cards/headphones.svg';
import notebook from '../../assets/Cards/notebook.svg';
import pen from '../../assets/Cards/pen.svg';
import letterA from '../../assets/Cards/letterA.svg';

interface CardType {
  img: string;
  title: string;
  text: string;
  buttonText: string;
}

const cards: CardType[] = [
  {
    img: pen,
    title: 'Grammar',
    text: 'Grammar is the backbone of any language. By mastering the rules, you’ll build a strong foundation for speaking and writing clearly. Step by step, grammar helps you feel confident in expressing your thoughts.',
    buttonText: 'Start to learn grammar',
  },
  {
    img: headphones,
    title: 'Listening',
    text: 'It helps you to improve your listening skills. If you want tounderstand what people talk about, you should listen, and then listen, and after that listen',
    buttonText: 'Start to listen',
  },
  {
    img: letterA,
    title: 'Vocabulary',
    text: 'Writing shows your ability to organize ideas. By practicing, you’ll learn to create texts that are clear, correct, and impactful. Strong writing skills open doors in study, work, and daily life.',
    buttonText: 'Start to find new words',
  },
  {
    img: notebook,
    title: 'Reading',
    text: 'Enhance your English reading skills by practicing text comprehension, improving reading speed, and learning to identify main ideas and important details. Perfect for expanding your vocabulary and understanding grammar in context.',
    buttonText: 'Start reading',
  },
];

export default function CardsSection() {
  return (
    <section className="pb-3">
      <h2 className="text-center display-5 fw-normal mb-4">
        Choose whatever you want
      </h2>
      <Container fluid className="d-flex justify-content-center gap-3 ">
        <Row>
          {cards.map((card) => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={card.img}
                  width={200}
                  height={200}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text className="my-card">{card.text}</Card.Text>
                  <Button className="">{card.buttonText}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
