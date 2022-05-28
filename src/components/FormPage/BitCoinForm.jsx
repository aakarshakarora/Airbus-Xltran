import React, { useEffect, useState } from "react";
import { Container, Form, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import BitCoinMobImg from '../assets/BitCoin.jpeg'
import BitCoinWebImg from '../assets/BitCoinWeb.png'


function BitCoinForm() {

  let navigate = useNavigate();

  let generatedCode = "";

  const [getCode, setGenCode] = useState("")
  const [projectName, setProjectName] = useState("")
  const [APIKey, setAPIKey] = useState("")
  const [AppTitle, setAppTitle] = useState("")
  const [bottomContainerColor, setbottomContainerColor] = useState("")
  const [selectCurrencyFontColor, setselectCurrencyFontColor] = useState("")
  const [coinCardColor, setcoinCardColor] = useState("")
  const [cardTextColor, setcardTextColor] = useState("")

  function BitCoinBase(APIKey, AppTitle, bottomContainerColor, selectCurrencyFontColor, coinCardColor, cardTextColor) {

    return `import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

const List<String> currenciesList = [
  'AUD',
  'BRL',
  'CAD',
  'CNY',
  'EUR',
  'GBP',
  'HKD',
  'IDR',
  'ILS',
  'INR',
  'JPY',
  'MXN',
  'NOK',
  'NZD',
  'PLN',
  'RON',
  'RUB',
  'SEK',
  'SGD',
  'USD',
  'ZAR'
];
const List<String> cryptoList = ['BTC', 'ETH', 'LTC'];
const coinAPIURL = 'https://rest.coinapi.io/v1/exchangerate';
const apiKey = '${APIKey}';

class CoinData {
  Future getCoinData(String selectedCurrency) async {
    Map<String, String> cryptoPrices = {};
    for (String crypto in cryptoList) {
      String requestURL =
          '$coinAPIURL/$crypto/$selectedCurrency?apikey=$apiKey';
      http.Response response = await http.get(Uri.parse(requestURL));
      if (response.statusCode == 200) {
        var decodedData = jsonDecode(response.body);
        double price = decodedData['rate'];
        cryptoPrices[crypto] = price.toStringAsFixed(0);
      } else {
        print(response.statusCode);
        throw 'Problem with the get request';
      }
    }
    return cryptoPrices;
  }
}

class PriceScreen extends StatefulWidget {
  @override
  _PriceScreenState createState() => _PriceScreenState();
}

class _PriceScreenState extends State<PriceScreen> {
  String selectedCurrency = 'INR';

  DropdownButton<String> androidDropdown() {
    List<DropdownMenuItem<String>> dropdownItems = [];
    for (String currency in currenciesList) {
      var newItem = DropdownMenuItem(
        value: currency,
        child: Text(currency),
      );
      dropdownItems.add(newItem);
    }
    return DropdownButton<String>(
      value: selectedCurrency,
      items: dropdownItems,
      onChanged: (value) {
        setState(() {
          selectedCurrency = value as String;
          getData();
        });
      },
    );
  }

  Map<String, String> coinValues = {};
  bool isWaiting = false;

  void getData() async {
    isWaiting = true;
    try {
      var data = await CoinData().getCoinData(selectedCurrency);
      isWaiting = false;
      setState(() {
        coinValues = data;
      });
    } catch (e) {
      print(e);
    }
  }

  @override
  void initState() {
    super.initState();
    getData();
  }

  Column makeCards() {
    List<CryptoCard> cryptoCards = [];
    for (String crypto in cryptoList) {
      cryptoCards.add(
        CryptoCard(
          cryptoCurrency: crypto,
          selectedCurrency: selectedCurrency,
          value: isWaiting ? ' ' : coinValues[crypto] as String,
        ),
      );
    }
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: cryptoCards,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          '${AppTitle}',
          style: TextStyle(
              fontSize: 25,
              fontWeight: FontWeight.bold,
              fontStyle: FontStyle.italic),
        ),
        centerTitle: true,
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          makeCards(),
          Container(
            height: 150.0,
            alignment: Alignment.center,
            padding: const EdgeInsets.only(bottom: 30.0),
            color: Colors.${bottomContainerColor},
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(
                  "Select Currency",
                  style: TextStyle(fontSize: 20, color: Colors.${selectCurrencyFontColor}),
                ),
                androidDropdown(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class CryptoCard extends StatelessWidget {
  const CryptoCard({
    required this.value,
    required this.selectedCurrency,
    required this.cryptoCurrency,
  });

  final String value;
  final String selectedCurrency;
  final String cryptoCurrency;

  @override
  Widget build(BuildContext context) {
    Map<String, String> img_values = {};
    img_values['BTC'] =
        'https://cdn-icons-png.flaticon.com/512/5968/5968260.png';
    img_values['ETH'] =
        'https://cdn-icons-png.flaticon.com/512/7016/7016523.png';
    img_values['LTC'] =
        'https://cdn.iconscout.com/icon/free/png-256/litecoin-ltc-3482909-2910825.png';
    return Padding(
      padding: const EdgeInsets.fromLTRB(18.0, 18.0, 18.0, 0),
      child: Card(
        color: Colors.${coinCardColor},
        elevation: 5.0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(10.0),
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 15.0, horizontal: 28.0),
          child: Row(
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 10),
                child: SizedBox(
                  height: 50,
                  width: 50,
                  child: Image.network(img_values[cryptoCurrency] as String),
                ),
              ),
              Text(
                '1 $cryptoCurrency = $value $selectedCurrency',
                textAlign: TextAlign.center,
                style: const TextStyle(
                  fontSize: 20.0,
                  color: Colors.${cardTextColor},
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`

  }

  function BitCoinDriverFx(projectName, AppTitle) {

    return `void main() => runApp(${projectName.replaceAll(' ', '')}());

class ${projectName.replaceAll(' ', '')} extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: '${AppTitle}',
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark(),
      home: PriceScreen(),
    );
  }
}`

  }


  const clearFormData = async () => {
    setGenCode("")
    setProjectName("")
    setAPIKey("")
    setAppTitle("")
    setbottomContainerColor("")
    setselectCurrencyFontColor("")
    setcoinCardColor("")
    setcardTextColor("")

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

    generatedCode += BitCoinBase(APIKey, AppTitle, bottomContainerColor, selectCurrencyFontColor, coinCardColor, cardTextColor)
    generatedCode += BitCoinDriverFx(projectName, AppTitle)

    console.log(generatedCode)

    setGenCode(generatedCode)
    downloadTxtFile(generatedCode, AppTitle);
    navigate("/output", { state: generatedCode });

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
    <Container id="example" className='flex'>
      <Modal.Dialog className='min-w-[350px]'>
        <Modal.Header closeButton>
          <Modal.Title>Demo Screenshot for Mobile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className='max-h-[700px]' src={BitCoinMobImg} alt="BitCoinMobImg"></img>
        </Modal.Body>
      </Modal.Dialog>
      <Modal.Dialog className='min-w-[350px]'>
        <Modal.Header closeButton>
          <Modal.Title>Crypto - Convertor App</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onReset={onReset} onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Project Name</Form.Label>
              <Form.Control type="text" placeholder="Add Project Name"
                value={projectName}
                onChange={(event) => {
                  setProjectName(event.target.value)
                }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>App Bar Name</Form.Label>
              <Form.Control type="text" placeholder="App Bar Name"
                value={AppTitle}
                onChange={(event) => {
                  setAppTitle(event.target.value)
                }} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter API Key from <a id='link' href='https://www.coinapi.io/'
                target="_blank">https://www.coinapi.io/</a></Form.Label>
              <Form.Control type="text" placeholder="Enter API Key"
                value={APIKey}
                onChange={(event) => {
                  setAPIKey(event.target.value)
                }}

              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Bottom Container Color</Form.Label>
              <br></br>
              <Form.Select aria-label="Default select example" style={DropdownStyle}
                onChange={(event) => {
                  setbottomContainerColor(event.target.value)
                }}
                value={bottomContainerColor}
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
              <Form.Label>Select Currency Font Color</Form.Label>
              <br></br>
              <Form.Select aria-label="Default select example" style={DropdownStyle}
                onChange={(event) => {
                  setselectCurrencyFontColor(event.target.value)
                }}
                value={selectCurrencyFontColor}
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
              <Form.Label>Set Coin Card Color</Form.Label>
              <br></br>
              <Form.Select aria-label="Default select example" style={DropdownStyle}
                onChange={(event) => {
                  setcoinCardColor(event.target.value)
                }}
                value={coinCardColor}
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
              <Form.Label>Card Text Color</Form.Label>
              <br></br>
              <Form.Select aria-label="Default select example" style={DropdownStyle}
                onChange={(event) => {
                  setcardTextColor(event.target.value)
                }}
                value={cardTextColor}
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
              disabled={!APIKey || !AppTitle || !bottomContainerColor || !selectCurrencyFontColor || !coinCardColor || !cardTextColor || !projectName}
            >
              Submit
            </button>
            <button
              type="reset"
              className="btn btn-danger"
              style={{ marginLeft: "20px" }}

              disabled={!APIKey && !AppTitle && !bottomContainerColor && !selectCurrencyFontColor && !coinCardColor && !cardTextColor && !projectName}

            >
              Reset
            </button>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
      <Modal.Dialog className='min-w-[350px]'>
        <Modal.Header closeButton>
          <Modal.Title>Demo Screenshot for Web</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={BitCoinWebImg} alt="BitCoinWebImg"></img>
        </Modal.Body>
      </Modal.Dialog>
    </Container >
  );
}

const DropdownStyle = {
  border: "2px solid grey", width: "25%", borderRadius: "10px"
}
export default BitCoinForm;