import React, { Component } from 'react';
import { Plataform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      timer: null,
      number: 0,
      iniciarPararText: 'Iniciar',
    }

    this.iniciarPararBotao = this.iniciarPararBotao.bind(this);
    this.zerarBotao = this.zerarBotao.bind(this);
    
  }

  iniciarPararBotao(){
    //Começa ou para o cronômetro

    if (this.state.timer == null) {
      //Iniciar o cronômetro
      let newS = this.state;
      newS.iniciarPararText = 'Parar';
      this.setState(newS);

      this.state.timer = setInterval(() => {
          let newState = this.state;
          newState.number += 0.1;
          this.setState(newState);
      }, 100);

      } else {
      //Parar o cronômetro
      clearInterval(this.state.timer);
      let newState = this.state;
      newState.iniciarPararText = 'Iniciar';
      newState.timer = null;
      this.setState(newState);
    }
  }

  zerarBotao() {

    clearInterval(this.state.timer);
    let newState = this.state;
    newState.iniciarPararText = 'Iniciar';
    newState.timer = null;
    newState.number = 0;
    this.setState(newState);
    
  }

  render() {
    return (

      <View style={styles.body}>


        <View style={styles.tContainer}>
          <Text style={styles.counterText}>{this.state.number.toFixed(1)}</Text>

      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.iniciarPararBotao}>
          <Text style={styles.buttonText}>{this.state.iniciarPararText}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.zerarBotao}>
          <Text style={styles.buttonText}>Zerar</Text>
          </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>FernandoBarcelos</Text>
        </View>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#221041',
    justifyContent: 'center',
  },

  tContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
  },

  button: {
    backgroundColor: '#331DF4',
    marginHorizontal: 15,
    height: 40,
    justifyContent: 'center',
    width: 75,
    alignItems: 'center',
  },

  buttonText:{
    color: '#fff'
  },

  counterText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#000',
    opacity: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 20,
  },
  footerText: {
    color: '#fff'
  },
});