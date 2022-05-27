import React, {useEffect, useState} from "react";
import {Container, Form, Modal} from "react-bootstrap";


function QuizAppForm() {
    let generatedCode = "";

    const [getCode, setGenCode] = useState("")
    const [projectName, setProjectName] = useState("")
    const [QuizAppFormTitle, setQuizAppFormTitle] = useState("")
    const [AppBarColor, setAppBarColor] = useState("")
    const [optionBoxColor, setoptionBoxColor] = useState("")
    const [QuizAppFormBgColor, setQuizAppFormBgColor] = useState("")

    function OptionScreen(optionBoxColor) {

        return `import 'package:flutter/material.dart';

class Question extends StatelessWidget {
  final String questionText;

  Question(this.questionText);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      margin: EdgeInsets.all(10),
      child: Text(
        questionText,
        style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
        textAlign: TextAlign.center,
      ),
    );
  }
}

class Answer extends StatelessWidget {
  final VoidCallback selectHandler;
  final String answerText;

  Answer(this.selectHandler, this.answerText);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(10, 10, 10, 5),
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
            primary: Colors.${optionBoxColor},
            padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 20),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(25),
            ),
            textStyle:
                const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
        onPressed: selectHandler,
        child: Text(answerText),
      ),
    );
  }
}
`

    }

    function QuestionAnswer() {

        return `class Quiz extends StatelessWidget {
  final List<Map<String, Object>> questions;
  final int questionIndex;
  final Function answerQuestion;

  Quiz({
    required this.questions,
    required this.answerQuestion,
    required this.questionIndex,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      children: [
        Question(
          questions[questionIndex]['questionText'] as String,
        ),
        ...(questions[questionIndex]['answers'] as List<Map<String, Object>>)
            .map((answer) {
          return Answer(
              () => answerQuestion(answer['score']), answer['text'] as String);
        }).toList()
      ],
    );
  }
}

class Result extends StatelessWidget {
  final int totalScore;
  final int resultScore;
  final VoidCallback resetHandler;

  Result(this.resultScore, this.resetHandler, this.totalScore);

  String get resultPhrase {
    String resultText;
    resultText = "Your Score is $resultScore out of $totalScore";
    return resultText;
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SizedBox(
        width: double.infinity,
        child: Card(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  resultPhrase,
                  style: const TextStyle(
                      fontSize: 20, fontWeight: FontWeight.bold),
                  textAlign: TextAlign.center,
                ),
                TextButton(
                  onPressed: resetHandler,
                  child: const Text(
                    'Restart Quiz!',
                    style: TextStyle(fontSize: 20),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
`

    }


    function QuizDriverFx(AppBarColor, QuizAppFormTitle, QuizAppFormBgColor, projectName) {

        return `void main() => runApp(${projectName.replaceAll(' ', '')}());

class ${projectName.replaceAll(' ', '')} extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _${projectName.replaceAll(' ', '')}State();
  }
}

class _${projectName.replaceAll(' ', '')}State extends State<${projectName.replaceAll(' ', '')}> {
  final _questions = const [{
    'questionText': 'Q1. Who created Flutter?',
    'answers': [
        {'text': 'Facebook', 'score': 0},
        {'text': 'Adobe', 'score': 0},
        {'text': 'Google', 'score': 1},
        {'text': 'Microsoft', 'score': 0},
    ],
},
    {
        'questionText': 'Q2. What is Flutter?',
        'answers': [
            {'text': 'Android Development Kit', 'score': 0},
            {'text': 'IOS Development Kit', 'score': 0},
            {'text': 'Web Development Kit', 'score': 0},
            {
                'text':
                    'SDK to build beautiful IOS, Android, Web & Desktop Native Apps',
                'score': 1
            },
        ],
    },
    {
        'questionText': ' Q3. Which programing language is used by Flutter',
        'answers': [
            {'text': 'Ruby', 'score': 0},
            {'text': 'Dart', 'score': 1},
            {'text': 'C++', 'score': 0},
            {'text': 'Kotlin', 'score': 0},
        ],
    },
    {
        'questionText': 'Q4. Who created Dart programing language?',
        'answers': [
            {'text': 'Lars Bak and Kasper Lund', 'score': 1},
            {'text': 'Brendan Eich', 'score': 0},
            {'text': 'Bjarne Stroustrup', 'score': 0},
            {'text': 'Jeremy Ashkenas', 'score': 0},
        ],
    },
    {
        'questionText':
            'Q5. Is Flutter for Web and Desktop available in stable version?',
        'answers': [
            {
                'text': 'Yes',
                'score': 0,
            },
            {'text': 'No', 'score': 1},
        ],
    }];
  var _questionIndex = 0;
  var _totalScore = 0;
  var _scoreOutOf;

  void _resetQuiz() {
    setState(() {
      _questionIndex = 0;
      _totalScore = 0;
    });
  }

  void _answerQuestion(int score) {
    _totalScore += score;
    setState(() {
      _questionIndex = _questionIndex + 1;
    });
    print(_questionIndex);
    if (_questionIndex < _questions.length) {
      print('We have more questions!');
    } else {
      print('No more questions!');
    }
  }

  @override
  Widget build(BuildContext context) {
    _scoreOutOf = _questions.length;
    return MaterialApp(
    title: '${QuizAppFormTitle}',
      theme: ThemeData(
        primarySwatch: Colors.${AppBarColor},
      ),
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
            title: const Text(
              '${QuizAppFormTitle}',
              style: TextStyle(
                  fontStyle: FontStyle.italic,
                  fontSize: 25,
                  fontWeight: FontWeight.bold),
            ),
            centerTitle: true),
        body: _questionIndex < _questions.length
            ? Card(
                color: Colors.${QuizAppFormBgColor},
                child: Quiz(
                  answerQuestion: _answerQuestion,
                  questionIndex: _questionIndex,
                  questions: _questions,
                ),
              )
            : Result(_totalScore, _resetQuiz, _scoreOutOf),
      ),
    );
  }
}
`

    }


    const clearFormData = async () => {
        setGenCode("")
        setProjectName("")


    };
    const downloadTxtFile = (value, fileName) => {
        const element = document.createElement("a");
        const file = new Blob([value], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = `${fileName}.txt`;
        document.body.appendChild(element);
        element.click();
    };


    const onSubmit = () => {
        generatedCode += OptionScreen(optionBoxColor)
        generatedCode += QuestionAnswer()
        generatedCode += QuizDriverFx(AppBarColor, QuizAppFormTitle, QuizAppFormBgColor, projectName)
        setGenCode(generatedCode)
        downloadTxtFile(getCode,QuizAppFormTitle)

    }


    const onReset = async (e) => {
        e.preventDefault();
        try {
            await clearFormData();
        } catch (e) {
            alert(`Failed ${e.message}`);
        }
    };

    return (
        <Container className='max-w-[1240px] mx-auto'>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Quiz App</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onReset={onReset} onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control type="text" placeholder="Add Project Name"
                                          value={projectName}
                                          onChange={(event) => {
                                              setProjectName(event.target.value)
                                          }}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter Quiz App Title</Form.Label>
                            <Form.Control type="text" placeholder="App Bar Name"
                                          value={QuizAppFormTitle}
                                          onChange={(event) => {
                                              setQuizAppFormTitle(event.target.value)
                                          }}/>
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label>App Bar Color</Form.Label>
                            <br></br>
                            <Form.Select aria-label="Default select example" style={DropdownStyle}
                                         onChange={(event) => {
                                             setAppBarColor(event.target.value)
                                         }}
                                         value={AppBarColor}
                                         placeholder="set Colour"
                                         required>
                                <option defaultValue="black">black</option>
                                <option value="blue">blue</option>
                                <option value="brown">brown</option>
                                <option value="green">green</option>
                                <option value="grey">grey</option>
                                <option value="lime">lime</option>
                                <option value="orange">orange</option>
                                <option value="pink">pink</option>
                                <option value="red">red</option>
                                <option value="yellow">yellow</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Quiz App Background Color</Form.Label>
                            <br></br>
                            <Form.Select aria-label="Default select example" style={DropdownStyle}
                                         onChange={(event) => {
                                             setQuizAppFormBgColor(event.target.value)
                                         }}
                                         value={QuizAppFormBgColor}
                                         placeholder="set Colour"
                                         required>
                                <option defaultValue="black">black</option>
                                <option value="blue">blue</option>
                                <option value="brown">brown</option>
                                <option value="green">green</option>
                                <option value="grey">grey</option>
                                <option value="lime">lime</option>
                                <option value="orange">orange</option>
                                <option value="pink">pink</option>
                                <option value="red">red</option>
                                <option value="yellow">yellow</option>
                            </Form.Select>
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label>Option Box Color</Form.Label>
                            <br></br>
                            <Form.Select aria-label="Default select example" style={DropdownStyle}
                                         onChange={(event) => {
                                             setoptionBoxColor(event.target.value)
                                         }}
                                         value={optionBoxColor}
                                         placeholder="set Colour"
                                         required>
                                <option defaultValue="black">black</option>
                                <option value="blue">blue</option>
                                <option value="brown">brown</option>
                                <option value="green">green</option>
                                <option value="grey">grey</option>
                                <option value="lime">lime</option>
                                <option value="orange">orange</option>
                                <option value="pink">pink</option>
                                <option value="red">red</option>
                                <option value="yellow">yellow</option>
                            </Form.Select>
                        </Form.Group>


                        <button
                            type="submit"
                            className="btn btn-primary"
                            id="but"
                            onClick={onSubmit}
                            disabled={optionBoxColor === "" || AppBarColor === "" || QuizAppFormTitle === "" || QuizAppFormBgColor === "" || projectName === ""}
                        >
                            Submit
                        </button>
                        <button
                            type="reset"
                            className="btn btn-danger"
                            style={{marginLeft: "20px"}}

                            disabled={optionBoxColor === "" || AppBarColor === "" || QuizAppFormTitle === "" || QuizAppFormBgColor === "" || projectName === ""}

                        >
                            Reset
                        </button>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </Container>
    );
}

const DropdownStyle = {
    border: "2px solid grey", width: "25%", borderRadius: "10px"
}
export default QuizAppForm;