import React, { useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";

function BMIForm() {
	return (
		<Container className='max-w-[1240px] mx-auto'>
			<Modal.Dialog>
				<Modal.Header closeButton>
					<Modal.Title>BMI Calculator</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Project Name</Form.Label>
							<Form.Control type="text" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Project Title</Form.Label>
							<Form.Control type="text" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Check
								type="switch"
								id="custom-switch"
								label="Center Title"
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Text For Height Entry Heading</Form.Label>
							<Form.Control type="text" />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Text For Weight Entry Heading</Form.Label>
							<Form.Control type="text" />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Elevated Button Text</Form.Label>
							<Form.Control type="text" />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Elevated Button Text Color</Form.Label>
							<br></br>
							<Form.Select aria-label="Default select example">
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</Form.Select>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Elevated Button Color</Form.Label>
							<br></br>
							<Form.Select aria-label="Default select example">
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</Form.Select>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Calculated BMI Result Color</Form.Label>
							<br></br>
							<Form.Select aria-label="Default select example">
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</Form.Select>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Inference BMI Result Color</Form.Label>
							<br></br>
							<Form.Select aria-label="Default select example">
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</Form.Select>
						</Form.Group>
						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</Modal.Body>
			</Modal.Dialog>
		</Container>
	);
}
export default BMIForm;