# 🗳 Decentralized Voting System

A full-stack blockchain-based voting application using smart contracts
(Solidity) and a backend + frontend stack. This project enables secure
voting where votes are recorded on-chain, and administrators manage
elections while ensuring transparency, immutability, and privacy.

------------------------------------------------------------------------

## Key Features

-   **Election Management**\
    Admins can create elections, set candidates, and control the voting
    period.

-   **Secure Voting**\
    Voters cast votes through a smart contract on the blockchain; votes
    are immutable.

-   **Roles & Access Control**\
    Only authorized admin can perform management tasks. Voters interact
    with a limited interface.

-   **Frontend Interface**\
    A web interface (HTML/CSS/JS) allowing users to register, login,
    view candidates, and vote.

-   **Backend & API**\
    A backend (Node.js / Python / API layer) to interact with smart
    contracts, fetch results, and manage off-chain data.

-   **Blockchain Layer (Solidity Contracts)**\
    Smart contracts for election logic: candidate registration, voting,
    result tallying.

------------------------------------------------------------------------

##  Technologies Used

-   **Smart Contracts:** Solidity\
-   **Blockchain Framework:** Truffle or Hardhat (migration & testing)\
-   **Backend / API:** Node.js / Express / Python-layer (depending on
    your stack)\
-   **Frontend:** HTML, CSS, JavaScript\
-   **Database (optional):** To store user metadata, logs, etc.\
-   **Other Tools:** Git, VS Code, Ganache / local blockchain network

------------------------------------------------------------------------

## Project Structure

    blockchain-voting-dapp/
    ├── build/                   # Compiled contract artifacts
    │   └── contracts/
    │       ├── Migrations.json
    │       └── Voting.json
    ├── contracts/               # Solidity source files and deployment scripts
    │   ├── 2_deploy_contracts.js
    │   ├── Migrations.sol
    │   └── Voting.sol
    ├── Database_API/            # Off-chain API or DB integration
    │   └── main.py (or appropriate server file)
    ├── migrations/              # Blockchain migration scripts
    │   └── 1_initial_migration.js
    ├── public/                  # Static / public assets (favicon, etc.)
    │   └── favicon.ico
    ├── src/                     # Frontend code
    │   ├── assets/              # Images, media
    │   │   └── eth5.jpg
    │   ├── css/                 # Stylesheets
    │   │   ├── admin.css
    │   │   ├── index.css
    │   │   └── login.css
    │   ├── dist/                # Bundled JS
    │   │   ├── app.bundle.js
    │   │   └── login.bundle.js
    │   ├── html/                # HTML pages
    │   │   ├── admin.html
    │   │   ├── index.html
    │   │   └── login.html
    │   └── js/                  # Client-side JS logic
    │       ├── app.js
    │       └── login.js
    ├── index.js                 # Entry point for backend server (if Node.js)
    ├── package.json             # Project dependencies
    ├── package-lock.json        # Locked versions
    ├── truffle-config.js        # Blockchain project configuration
    ├── .gitignore                # Files/folders to ignore in Git
    └── README.md                # This documentation file

------------------------------------------------------------------------

## 🚀 Quick Start

### Prerequisites

-   Node.js & npm\
-   Truffle / local Ethereum environment (Ganache)\
-   Solidity compiler\
-   (Optional) Python (if backend uses Python)

### Steps

1.  **Clone the repo**

    ``` bash
    git clone https://github.com/Anusreereddysama/Decentralized_VotingSystem.git
    cd Decentralized_VotingSystem
    ```

2.  **Install dependencies**

    ``` bash
    npm install
    ```

3.  **Compile and deploy contracts**

    ``` bash
    truffle compile
    truffle migrate
    ```

4.  **Run backend server / API**

    ``` bash
    npm start   # or `node index.js` / `python main.py` if backend is Python
    ```

5.  **Open frontend**

    -   Open `public/index.html` or run your frontend dev server\
    -   Interact with voting interface, admin panel, etc.

------------------------------------------------------------------------

## Common Issues

-   **"Remote contains work you do not have locally" error**\
    Use `git pull --rebase origin main` or merge before pushing.

-   **Deployment errors**\
    Make sure your local blockchain is running (Ganache) and you point
    Truffle to correct network.

-   **Contract not found / ABI mismatch**\
    Ensure your contracts are compiled and artifacts are synced with
    frontend.

-   **Node modules / dependencies are large**\
    Use `.gitignore` to avoid tracking `node_modules/` and build
    artifacts.

------------------------------------------------------------------------

## Future Enhancements

-   Support for **multiple elections running simultaneously**\
-   Voting **delegation / proxy voting**\
-   **Blockchain event-based notifications** (e.g., new vote alerts)\
-   Mobile responsive frontend or native mobile app\
-   **Integration with identity systems** (KYC or user verification)

------------------------------------------------------------------------

## 🆘 Support

For questions, bug reports, or feature requests:

**Anusree S** -- <anusreereddysama@gmail.com>\
