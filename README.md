## Mini Page Builder

### Overview
This project is a simple React application that allows users to create, drag, and drop components onto a canvas. Users can interact with the components by clicking on them to select, dragging them to reposition, and configuring their properties through a modal interface.

### Features
1. **Component Creation**: Users can create components by dragging them from the sidebar onto the canvas. The available components include Label, Input, and Button.
2. **Drag-and-Drop**: Components on the canvas can be dragged and dropped to change their position.
3. **Component Selection**: Clicking on a component on the canvas selects it, displaying a red border around the selected component.
4. **Configuration Modal**: Users can configure the properties of a selected component by pressing Enter after selecting it. This action opens a modal where users can modify properties such as text, font size, and font weight.
5. **Automatic Persistence**: All changes made to components, including creation, deletion, repositioning, and configuration, are automatically saved to local storage, ensuring persistence across page reloads.

### How to Run Locally
To run this project locally, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Start the development server by running `npm start`.
5. Open your web browser and go to `http://localhost:3000` to view the application.

### Project Structure
- **src/components**: Contains the React components used in the project.
  - `Component.js`: Defines the individual components (Label, Input, Button) and their behavior.
  - `ConfigModal.js`: Implements the configuration modal for modifying component properties.
  - `Canvas.js`: Implements the canvas where components are rendered and interacted with.
- **src**: Contains the main application files.
  - `App.js`: Main application component that renders the Canvas component.
- **public**: Contains static assets and the `index.html` file.
- **package.json**: Manages project dependencies and scripts.

### Technologies Used
- React: Front-end JavaScript library for building user interfaces.
- HTML/CSS: Markup and styling languages for structuring and styling the application.
- localStorage: Web storage API used for persistent data storage.

### Dependencies
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React components.
- `uuid`: Library for generating unique IDs.
