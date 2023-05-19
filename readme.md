PROBLEMA: Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

SOLUZIONE:
1- Inseriamo una variabile collegata ad un input che chiede all'utente il suo nome e cognome 
2- Inseriamo una variabile collegata ad un input che chiede all'utente il numero di chilometri da percorrere 
3- Inseriamo una variabile collegata ad un input che chiede all'utente la sua fascia d'età 
    3.1 Minorenne
    3.2 Maggiorenne
    3.3 Over 65 anni
4- Calcoliamo il prezzo del biglietto moltiplicandolo per il numero di km che dovrà effettuare l'utente utilizzando  variabili concatenate.
SE: l'età dell' utente è minore di 18 avrà uno sconto del 20%
ALTRIMENTI SE: l'età dell' utente è maggiore di 65 anni avrà uno sconto del 40%
ALTRIMENTI: pagherà la tariffa regolare