import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function SkillTableCell(props) {

  const width = {width: "60%", margin: 'auto'}
  return (
    <>
      <Row style={width}>
        <Col md={12}><strong>{props.title}</strong></Col>
        <Col md={12}>{props.list}</Col>
      </Row>
    </>
  )
}

export default SkillTableCell;
