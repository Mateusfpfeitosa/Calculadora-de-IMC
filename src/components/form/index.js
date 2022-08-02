import React, {useState} from "react";
import { View,TextInput,Text,TouchableOpacity } from "react-native";
import ResultImc from "./resultiImc";
import styles from "./style"

export default function Form(){

const[height,setHeight] = useState(null);
const[weight,setWeight] = useState(null);
const[messageImc,setMessageImc]= useState("Preencha o peso e altura");
const[imc,setImc]= useState(null);
const[textButton,setTextButton]= useState("Caucular");

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2));
}; 

function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o Peso e Altura")
};


    return(

        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.formImput}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.formImput}
                value={weight}
                onChangeText={setWeight}
                placeholder="Ex. 75.365"
                keyboardType="numeric"
                />
               <TouchableOpacity
               style={styles.formButton}
               onPress={()=>{
                validationImc()
               }}
               >
                <Text style={styles.formButtonText}>{textButton}</Text>
               </TouchableOpacity>
            </View>          
            <ResultImc messageResultImc={messageImc} ResultImc={imc} />  
        </View>
    );
}