// Styles
import '../styles.css';
import '../../../markdown-styles.css';

// Data
import myData from '../../../data.json';

// React && Hooks
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';

// Libraries
import ReactMarkdown from 'react-markdown';
import { Col, Container, Row, Accordion } from 'react-bootstrap';
import remarkGfm from 'remark-gfm';
import ReactPlayer from 'react-player';
import Journal from '../../../Components/Icons/Journal';

// Types
import {
  type LessonsData,
  type Lesson,
  type Level,
  type Type,
  type Id,
} from '../types';

const data: LessonsData = myData;

export default function LessonPage() {
  const { level, type, id } = useParams<{
    level: Level;
    type: Type;
    id: Id;
  }>();

  const lesson: Lesson | undefined = useMemo(() => {
    if (!level || !type || !id) {
      return undefined;
    }
    return data[level][type][id];
  }, [level, type, id]);

  return lesson ? (
    <Container fluid="md" className="p-3">
      <Row className="gap-2 align-items-start">
        <Col xs={12} className="text-center p-0">
          <h1 className="my-title my-title-border rounded p-2">
            {lesson.title}
          </h1>
        </Col>
        <Col xs={12} lg={6} className="border rounded p-4">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ ...props }) => <h2 className="text-center" {...props} />,
              strong: ({ ...props }) => (
                <strong className="bold-paragraph" {...props} />
              ),
              table: ({ ...props }) => (
                <div className="table-responsive">
                  <table className="table table-hover" {...props} />
                </div>
              ),
              th: ({ ...props }) => <th scope="col" {...props} />,
            }}
          >
            {lesson.content}
          </ReactMarkdown>

          <hr />

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Examples</Accordion.Header>
              <Accordion.Body>
                <ReactMarkdown
                  components={{
                    strong: ({ ...props }) => (
                      <strong className="bold-paragraph" {...props} />
                    ),
                    ul: ({ ...props }) => (
                      <ul className="list-group" {...props} />
                    ),
                    li: ({ ...props }) => (
                      <li className="list-group-item" {...props} />
                    ),
                  }}
                >
                  {lesson.examples.join('\n\n')}
                </ReactMarkdown>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col className="border rounded p-4">
          <div className="d-flex align-items-center justify-content-between">
            <h2>
              <span className="my-title">Extra</span> material
            </h2>

            <Journal />
          </div>

          <hr />

          <ReactPlayer
            src={lesson.videoUrl}
            style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
            controls
          />
        </Col>
      </Row>
    </Container>
  ) : (
    <div>Invalid path</div>
  );
}
