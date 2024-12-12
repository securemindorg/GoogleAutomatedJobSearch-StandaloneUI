<kbd>
<img src="https://github.com/user-attachments/assets/20239439-7753-4b68-ad6b-1fc007d85c49">
</kbd>

# Google Automated Job Search Standalone UI
This standalone web application, built with TypeScript, allows users to view and interact with job postings from a CSV file. The app features:

- A clean and user-friendly interface for displaying job postings.
- Local storage to track jobs that have been clicked.
- Easy setup and development workflow using `npm`.

## Features

- **CSV Integration**: Reads job postings from a local CSV file.
- **Local Storage**: Saves the state of clicked job postings, ensuring they remain marked across sessions.
- **Interactive UI**: Provides a "pretty" and organized display of job postings.
- **Standalone App**: No backend; all data is handled locally.

## Prerequisites

- Node.js (version 14 or higher recommended)
- npm (Node Package Manager)

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**:
   Run the following command to install all required packages:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   Launch the app in development mode with:
   ```bash
   npm run dev
   ```

4. **Open the App**:
   Navigate to `http://localhost:8080` in your web browser to view the application.

## Usage

1. **Upload a CSV File**:
   - Click the "Upload" button to load a CSV file containing job postings.
   - The app will parse and display the jobs in an organized format.

2. **Interact with Job Listings**:
   - Click on any job to mark it as "clicked."
   - Clicked jobs will be stored in the browser's local storage and remain marked even after refreshing the page.

## Development

To modify or extend the app, follow these steps:

1. **Run the Development Server**:
   ```bash
   npm run dev
   ```

2. **Build the App**:
   For production, generate a static build:
   ```bash
   npm run build
   ```

3. **Lint and Format**:
   Ensure code quality with:
   ```bash
   npm run lint
   ```

## CSV Format

The CSV file should follow this structure:

| Title              | Link                                  | Description       |
|--------------------|---------------------------------------|-------------------|
| Data Scientist     | https://example.com/job1             | Job description 1 |
| Software Engineer  | https://example.com/job2             | Job description 2 |

## Contributing

If you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request.

## License

This project is open-source and available under the MIT License.

## Acknowledgments

Thanks to all contributors and users for helping make this project better!


