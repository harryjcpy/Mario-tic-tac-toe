# Mario Tic-Tac-Toe

A fun and engaging version of the classic Tic-Tac-Toe game featuring Mario and Bowser icons, with sound effects from the Mario video game series. This game is built using React.js and provides players with the excitement of iconic characters as they compete in this timeless game.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Features
- **Mario vs. Bowser**: Mario and Bowser icons replace the traditional X and O, adding a fun twist to the game.
- **Sound Effects**: Enjoy sound effects inspired by the Mario game series, including sounds for moves, wins, and draws.
- **Toggle Background Music**: Background music can be toggled on or off during gameplay.
- **Win & Draw Animations**: Special animations and sounds when either Mario or Bowser wins, or when the game ends in a draw.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Demo
You can view a live demo of the project [here](https://main--tic-tac-toe-react-cut-zero.netlify.app/).

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/mario-tic-tac-toe.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd mario-tic-tac-toe
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Start the development server:**
    ```bash
    npm run dev
    ```

The app will run locally on [http://localhost:3000](http://localhost:3000).

## Usage

1. Click on any empty cell to make your move.
2. Players alternate between Mario and Bowser, represented by their respective icons.
3. The game will announce the winner with sound effects and animations once a player has aligned three of their icons.
4. If the game ends in a draw, you’ll be notified by special sound effects and animations.
5. Use the **Reset** button to start a new game, and the **Sound Toggle** button to control background music.

## Components

### 1. `TicTacToe.jsx`
- The main game component that manages the game logic, sound effects, and displays the game board with Mario and Bowser icons.

### 2. `DrawComponent.jsx`
- A component that handles the draw event and renders a notification when the game ends in a tie.

### 3. `SoundToggle.jsx`
- A component that manages the background music toggle functionality.

## Technologies Used
- **React.js**: Frontend framework for building the game logic and user interface.
- **CSS3**: Styling for animations and visual effects.
- **JavaScript (ES6+)**: Logic for handling game interactions, sound effects, and user moves.
- **HTML5**: Structuring the application layout.

## Contributing

Contributions are welcome! Feel free to fork this repository, make changes, and submit a pull request. Please ensure to follow the project's coding style and conventions.

---

### Acknowledgments
Thanks to [ChatGPT](https://openai.com/chatgpt) for assisting in building this project. Special thanks to Nintendo for the Mario series inspiration.
Inspired from various YouTube tutorials.
