# Climate Charts 🌤

Climate Charts is a React application built with `pnpm`, `Vite`, `TypeScript`, and `Tailwind CSS`. It is designed to visualize temperature and precipitation data from CSV files.

## Features

- **Active Tab Persistence:** Remember and restore the last active tab when the user revisits the application.
- **Responsive Design:** Adjusts seamlessly to various screen sizes and devices for optimal user experience.
- **Cache System:** Optimize performance with built-in caching.
- **Language Toggle:** Switch between English and French for user interface.
- **Theme Switcher:** Toggle between light and dark modes for better user experience.

## Installation

To run the project locally, please follow the steps below ([Docker](https://www.docker.com/) is required).

### Clone the Project

```bash
git clone https://github.com/MqxBrt/Climate-Charts
```

### Navigate to the Project Directory

```bash
cd climate-charts
```

### Build the Docker Image

```bash
docker compose build
```
### Start the Docker Container

```bash
docker compose up
```

Finally, open [localhost:3000](http://localhost:3000/) in your web browser.

## Dependencies

The project uses the following dependencies:

- **React:** 18.3.1
- **Chart.js:** 4.4.3
- **chartjs-adapter-date-fns:** 3.0.0
- **papaparse:** 5.4.1
- **react-chartjs-2:** 5.2.0
- **zustand:** 4.5.4

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/MqxBrt/Climate-Charts/blob/master/LICENSE) file for more details.

## Author

Developed by BOURRET Maxime.
