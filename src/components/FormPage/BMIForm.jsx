import React, { useEffect, useState } from "react";
import { Container, Form, Modal } from "react-bootstrap";

function AppStart(projectName, appBarText, AppBarBackgroundColor, InputAreaBgColor, labelTextforHeightEntry, labelTextforWeightEntry, elevatedButtonColor, elevatedButtonText, elevatedButtonTextColor, calculatedBMIresultColor, inferenceBMIresultColor) {

    return `
import 'package:flutter/material.dart';
class ${projectName.replaceAll(' ', '')} extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return ${projectName.replaceAll(' ', '')}State();
  }
}

class ${projectName.replaceAll(' ', '')}State extends State<${projectName.replaceAll(' ', '')}> {
  final TextEditingController weightController = TextEditingController();
  final TextEditingController heightController = TextEditingController();
  double bmi = 0;
  String bmiResult = "";

  void calculateBMI() {
    setState(() {
      double weight = double.parse(weightController.text);
      double height = double.parse(heightController.text);
      if ((weightController.text.isNotEmpty || weight > 0) &&
          (heightController.text.isNotEmpty || height > 0)) {
        bmi = ((weight / (height * height)) * 10000.0);
      } else {
        bmi = 0.0;
      }
      if (bmi < 18.5) {
        bmiResult = "You are underweight";
      } else if (bmi >= 18.5 && bmi < 25.0) {
        bmiResult = "Normal weight";
      } else if (bmi >= 25.0 && bmi < 30.0) {
        bmiResult = "Overweight";
      } else {
        bmiResult = "Obese";
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("${appBarText}"),
        centerTitle: true,
        backgroundColor: Colors.${AppBarBackgroundColor},
      ),
      body: Container(
        alignment: Alignment.center,
        child: ListView(
          padding: const EdgeInsets.all(3.0),
          children: <Widget>[
            Image.network(
              'https://cdn-icons-png.flaticon.com/512/3373/3373123.png',
              height: 75.0,
              width: 75.0,
            ),
            const SizedBox(
              height: 10,
            ),
            
            Card(
              color: Colors.${InputAreaBgColor},
              child: Padding(
                padding: const EdgeInsets.all(13.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    TextField(
                      controller: heightController,
                      keyboardType: TextInputType.number,
                      decoration: const InputDecoration(
                        labelText: "${labelTextforHeightEntry}",
                        hintText: "172",
                        icon: Icon(Icons.account_box),
                      ),
                    ),
                    TextField(
                      controller: weightController,
                      keyboardType: const TextInputType.numberWithOptions(),
                      decoration: const InputDecoration(
                        labelText: "${labelTextforWeightEntry}",
                        hintText: "65",
                        icon: Icon(Icons.accessibility),
                      ),
                    ),
                    const Padding(padding: EdgeInsets.all(15.0)),
                    ElevatedButton(
                      onPressed: calculateBMI,
                      style: ElevatedButton.styleFrom(
                          primary: Colors.${elevatedButtonColor},
                          onPrimary: Colors.${elevatedButtonTextColor},
                          textStyle: const TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.bold,
                          )),
                      child: const Text("${elevatedButtonText}"),
                    ),
                  ],
                ),
              ),
            ),
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                const Padding(
                  padding: EdgeInsets.all(6.0),
                ),
                Text(
                  "BMI: $bmi",
                  style: const TextStyle(
                    color: Colors.${calculatedBMIresultColor},
                    fontWeight: FontWeight.w600,
                    fontSize: 25.0,
                  ),
                ),
                const Padding(
                  padding: EdgeInsets.all(6.0),
                ),
                Text(
                  "Inference from your BMI-:" "\\n$bmiResult",
                  style: const TextStyle(
                    color: Colors.${inferenceBMIresultColor},
                    height: 2.0,
                    fontWeight: FontWeight.w600,
                    fontSize: 20.0,
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}`
}

function DriverFx(projectName, appBarText) {
    return `void main() {
  runApp(MaterialApp(
      title: "${appBarText}",
      home: ${projectName.replaceAll(' ', '')}(),
      debugShowCheckedModeBanner: false,
      theme: ThemeData.light()));
}`

}





function BMIForm() {
	let generatedCode = "";
	// generatedCode +=  AppStart(values.projectName, values.appBarText, values.AppBarBackgroundColor, values.InputAreaBgColor, values.labelTextforHeightEntry, values.labelTextforWeightEntry, values.elevatedButtonColor, values.elevatedButtonText, values.elevatedButtonTextColor, values.calculatedBMIresultColor, values.inferenceBMIresultColor)
	// generatedCode += DriverFx(values.projectName, values.appBarText)

console.log(generatedCode)

	const [values, setValues] = useState({
		projectName: "",
		appBarText: "",
		AppBarBackgroundColor: "black",
		InputAreaBgColor: "black",
		labelTextforHeightEntry:"",
		labelTextforWeightEntry:"",
		elevatedButtonColor:"black",
		elevatedButtonText:"",
		elevatedButtonTextColor:"black",
		calculatedBMIresultColor:"black",
		inferenceBMIresultColor:"black",
	  });
	  const set = (name) => {
		return ({ target: { value } }) => {
		  setValues((oldValues) => ({ ...oldValues, [name]: value }));
		};
	  };

	  const clearFormData = async () => {
		setValues({
			projectName: "",
			appBarText: "",
			AppBarBackgroundColor: "",
			InputAreaBgColor: "",
			labelTextforHeightEntry:"",
			labelTextforWeightEntry:"",
			elevatedButtonColor:"",
			elevatedButtonText:"",
			elevatedButtonTextColor:"",
			calculatedBMIresultColor:"",
			inferenceBMIresultColor:"",
		});
	  };

		
			const onSubmit = () =>{
				generatedCode += AppStart(values.projectName, values.appBarText, values.AppBarBackgroundColor, values.InputAreaBgColor, values.labelTextforHeightEntry, values.labelTextforWeightEntry, values.elevatedButtonColor, values.elevatedButtonText, values.elevatedButtonTextColor, values.calculatedBMIresultColor, values.inferenceBMIresultColor);
				generatedCode += DriverFx(values.projectName, values.appBarText);
			}
	
	  
	
		// console.log(generatedCode);

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
					<Modal.Title>BMI Calculator</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form onReset={onReset} onSubmit={onSubmit}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Project Name</Form.Label>
							<Form.Control type="text"  placeholder="Add Project Name"
                value={values.projectName}
                onChange={set("projectName")}/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Project Title</Form.Label>
							<Form.Control type="text" placeholder="Add Project Title"
                value={values.appBarText}
                onChange={set("appBarText")}/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Label Text for Height Entry</Form.Label>
							<Form.Control type="text" placeholder="Add Entry height"
                value={values.labelTextforHeightEntry}
                onChange={set("labelTextforHeightEntry")}/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Label Text for Weight Entry</Form.Label>
							<Form.Control type="text"  placeholder="Add Entry Weight"
                value={values.labelTextforWeightEntry}
                onChange={set("labelTextforWeightEntry")}/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Elevated Button Text</Form.Label>
							<Form.Control type="text" placeholder="Add Button Text"
                value={values.elevatedButtonText}
                onChange={set("elevatedButtonText")} />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Elevated Button Text Color</Form.Label>
							<br></br>
							<Form.Select aria-label="Default select example" style={DropdownStyle}
							 onChange={set("elevatedButtonTextColor")}
							 value={values.elevatedButtonTextColor}
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
							<Form.Label>Elevated Button Color</Form.Label>
							<br></br>
							<Form.Select aria-label="Default select example" style={DropdownStyle}
							 onChange={set("elevatedButtonColor")}
							 value={values.elevatedButtonColor}
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
							<Form.Label>Calculated BMI Result Color</Form.Label>
							<br></br>
							<Form.Select aria-label="Default select example" style={DropdownStyle}
							 onChange={set("calculatedBMIresultColor")}
							 value={values.calculatedBMIresultColor}
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
							<Form.Label>Inference BMI Result Color</Form.Label>
							<br></br>
							<Form.Select aria-label="Default select example" style={DropdownStyle}
							 onChange={set("inferenceBMIresultColor")}
							 value={values.inferenceBMIresultColor}
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
							<Form.Label>App Bar Background Color </Form.Label>
							<br></br>
							<Form.Select aria-label="Default select example" style={DropdownStyle}
							 onChange={set("AppBarBackgroundColor")}
							 value={values.AppBarBackgroundColor}
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
							<Form.Label>Input Area Background Color</Form.Label>
							<br></br>
							<Form.Select aria-label="Default select example" style={DropdownStyle}
							 onChange={set("InputAreaBgColor")}
							 value={values.InputAreaBgColor}
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
              disabled={!values.projectName || !values.appBarText || !values.labelTextforHeightEntry || !values.InputAreaBgColor || !values.labelTextforHeightEntry || !values.labelTextforWeightEntry || !values.elevatedButtonColor || !values.elevatedButtonText || !values.elevatedButtonTextColor || !values.calculatedBMIresultColor || !values.inferenceBMIresultColor}
            >
              Submit
            </button>
						<button
              type="reset"
              className="btn btn-danger"
			  style={{marginLeft:"20px"}}
              disabled={
                !values.projectName && !values.appBarText && !values.labelTextforHeightEntry &&  !values.labelTextforHeightEntry && !values.labelTextforWeightEntry &&  !values.elevatedButtonText 
              }
            >
              Reset
            </button>
					</Form>
				</Modal.Body>
			</Modal.Dialog>
		</Container>
	);
}
const DropdownStyle ={
	border:"2px solid grey",width:"25%",borderRadius:"10px"
}
export default BMIForm;