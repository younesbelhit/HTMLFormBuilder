import React, { Fragment } from 'react';
import { Card, CardBody, Col, Row, Input } from 'reactstrap';

const Template = (component) => {

    return (
        <Fragment>
            <Row>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <Card>
                        <CardBody>
                            <div id="fb-editor"></div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <Card>
                        <CardBody>
                            <Input type="textarea" name="preview" id="preview" />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )

}

export default Template;