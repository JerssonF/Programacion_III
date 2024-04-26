/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package cajero.bll;

/**
 *
 * @author USUARIO
 */
public class cajero {

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public double getTotal_depositos() {
        return total_depositos;
    }

    public void setTotal_depositos(int total_depositos) {
        this.total_depositos = total_depositos;
    }

    public double getTotal_retiros() {
        return total_retiros;
    }

    public void setTotal_retiros(double total_retiros) {
        this.total_retiros = total_retiros;
    }

    public int getCantidad_depositos() {
        return cantidad_depositos;
    }

    public void setCantidad_depositos(int cantidad_depositos) {
        this.cantidad_depositos = cantidad_depositos;
    }

    public int getCantidad_retiros() {
        return cantidad_retiros;
    }

    public void setCantidad_retiros(int cantidad_retiros) {
        this.cantidad_retiros = cantidad_retiros;
    }

    public double getValor_trasaccion() {
        return valor_transaccion;
    }

    public void setValor_trasaccion(double valor_trasaccion) {
        this.valor_transaccion = valor_trasaccion;
    }
    double saldo = 1000000;
    double total_depositos;
    double total_retiros;
    int cantidad_depositos;
    int cantidad_retiros;
    double valor_transaccion;
    
    public void Depositar(double valor_deposito){
       saldo = saldo+valor_deposito;
       cantidad_depositos = cantidad_depositos+1;
       total_depositos = total_depositos+valor_deposito;     
          
    }
    public void Retirar(double valor_retiro){
        saldo = saldo-valor_retiro;        
       cantidad_retiros = cantidad_retiros+1;
       total_retiros= total_retiros-valor_retiro;  
      
    }
                     
  }
