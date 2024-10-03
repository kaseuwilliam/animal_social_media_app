# 🐾 Animal Social Media App

## Project Overview

This React-based application showcases a simple social media platform for people and their pets. It demonstrates the use of components, props, and basic styling in React.

## Features

- Display of person profiles with details like name, age, and hometown
- Pet profiles with information such as name, type, breed, and age
- Reusable Card component for consistent styling
- Dog component with dynamic nickname generation

## Project Structure

```
src/
|-- components/
|   |-- Person.js
|   |-- Pet.js
|   |-- Card.js
|   |-- Dog.js
|   |-- Cat.js
|-- CSS/
|   |-- Card.css
|   |-- Person.css
|-- assets/
|   |-- pic.jpeg
|-- App.js
|-- index.js
```

## Components

1. **App**: The main component that renders the entire application.
2. **Person**: Displays information about a person.
3. **Pet**: Shows details about a pet and includes a Dog component.
4. **Card**: A reusable component for consistent styling.
5. **Dog**: Renders a message with the pet's nickname.
6. **Cat**: (Currently empty, potential for future expansion)

## How to Run

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/animal-social-media-app.git
   ```

2. Navigate to the project directory:
   ```
   cd animal-social-media-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

The app currently displays:
- Two Person components with full details
- One Person component with default hometown
- Two Pet components, each wrapped in a Card component

## Styling

- Basic styling is implemented using CSS modules
- The Card component has a distinct style with border and box-shadow

## Future Improvements

- Implement the Cat component
- Add more interactive features (e.g., liking, commenting)
- Integrate with a backend to fetch and store data
- Improve responsive design for various screen sizes
- Add user authentication and profile management

## Contributing

Contributions, issues, and feature requests are welcome.

Happy coding! 🐶🐱
