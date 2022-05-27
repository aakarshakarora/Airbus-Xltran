import React from 'react';
import { Container, Form, Button, Modal } from "react-bootstrap";
class CopyExample extends React.Component {

	constructor(props) {
		super(props);

		this.state = { copySuccess: '' }
	}

	copyToClipboard = (e) => {
		this.textArea.select();
		document.execCommand('copy');
		e.target.focus();
		this.setState({ copySuccess: ' Copied!' });
	};

	render() {
		return (
			<Container className='max-w-[1240px] mx-auto'>
				<Modal.Dialog size="xl">
					<Modal.Header closeButton>
						<Modal.Title>Instructions</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p className='mb-1'>➡ If You have flutter SDK installed in your system, then copy code in <b>main.dart</b> file of your project and run your code in either Android/iOS/Web Emulator to see result.</p>
						<p className='mb-1'>➡ If you dont have flutter SDK installed then you can run your code in <a id='link' href='https://dartpad.dev/' target="_blank">https://dartpad.dev/</a> or <a id='link' href='https://flutlab.io/' target="_blank">https://flutlab.io/</a>.</p>
						<p className='mb-1'>➡ For the BitCoin App add the <b>http</b> dependency in <b>pubspec.yaml</b> from <a id='link' href='https://pub.dev/' target="_blank">https://pub.dev/</a>.</p>
					</Modal.Body>
				</Modal.Dialog>
				<Modal.Dialog size="xl">
					<Modal.Body>
						<Form>
							<Form.Group className="mb-3">
								<Form.Label className="text-2xl font-bold text-center">Source Code</Form.Label>
								<Form.Control value={`import hljs from 'highlight.js';

document.addEventListener('DOMContentLoaded', () => {
	hljs.initHighlightingOnLoad();

	const codeBlock = document.getElementById('code');
	const copyButton = document.getElementById('copy-button');
	const copySuccess = document.getElementById('copy-success');

	const copyTextHandler = () => {
		const text = codeBlock.innerText;
		navigator.clipboard.writeText(text).then(
			() => {
				copySuccess.classList.add('show-message');
				setTimeout(() => {
					copySuccess.classList.remove('show-message');
				}, 2500);
			},
			() => {
				console.log('Error writing to the clipboard');
			}
		);
	};

	copyButton.addEventListener('click', copyTextHandler);
});
`} ref={(textarea) => this.textArea = textarea} as="textarea" rows={15} />
							</Form.Group>
							<Button onClick={this.copyToClipboard} variant="primary">Copy Text</Button>
							{this.state.copySuccess}
						</Form>
					</Modal.Body>
				</Modal.Dialog>
			</Container>
		);
	}

}

export default CopyExample;