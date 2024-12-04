<h1 align="center">📊 Ranked Matches Calculator 🎮</h1>

### **Description**  
This project is a solution to the "Calculadora de partidas Rankeadas" challenge proposed by the **[DIO.me](https://web.dio.me/track/formacao-logica-de-programacao)** course. The goal is to implement a system that calculates a player's ranked match balance and determines their level based on their victories, using fundamental programming concepts such as variables, operators, loops, decision structures, and functions.

## **Challenge Requirements**  
The application must:  

1. Create a function that:  
   - Receives as parameters the player's number of **victories** and **defeats**.  
   - Calculates the ranked match balance using the following formula:  
     ```  
     balance = victories - defeats  
     ```  

2. Determine the player's level based on the number of victories:  
   - **Victories < 10** → **Iron**  
   - **11 ≤ Victories ≤ 20** → **Bronze**  
   - **21 ≤ Victories ≤ 50** → **Silver**  
   - **51 ≤ Victories ≤ 80** → **Gold**  
   - **81 ≤ Victories ≤ 90** → **Diamond**  
   - **91 ≤ Victories ≤ 100** → **Legendary**  
   - **Victories ≥ 101** → **Immortal**  

3. Display a message with the player's balance and level in the following format:  
   ```  
   The Hero has a balance of {balance} and is at the level of {level}.  
   ```

## **Tools and Concepts Used**  
- Variables  
- Operators  
- Functions  
- Loops  
- Decision Structures  

## **How to Run the Project**  

1. **Install Node.js**  
   Make sure **Node.js** is installed on your computer. If not, download it from the official website:  
   - [Node.js Official Site](https://nodejs.org)  

2. **Clone this repository**:  
   ```bash  
   git clone https://github.com/annielymariah/ranked-matches-calculator-DIO.git  
   ```  

3. **Navigate to the project directory**:  
   ```bash  
   cd ranked-matches-calculator-DIO
   ```  

4. **Install the dependencies**:  
   Before running the script, install the required dependencies by executing:  
   ```bash  
   npm install  
   ```  

5. **Run the script**:  
   After installing the dependencies, execute the project with:  
   ```bash  
   npm start  
   ```  

6. **Interact with the program**:  
   Input the number of victories and defeats when prompted and view the player's balance and level.

