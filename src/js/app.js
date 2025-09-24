// import "../css/style.css"

const Web3 = require('web3');
const contract = require('@truffle/contract');

const votingArtifacts = require('../../build/contracts/Voting.json');
const VotingContract = contract(votingArtifacts);

window.App = {
  // Corrected eventStart method
  eventStart() { 
    window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(() => {
        VotingContract.setProvider(window.ethereum);
        VotingContract.defaults({ 
          from: window.ethereum.selectedAddress, 
          gas: 6654755 
        });

        // Load account data
        this.account = window.ethereum.selectedAddress;
        $("#accountAddress").html("Your Account: " + window.ethereum.selectedAddress);

        VotingContract.deployed()
          .then((instance) => {
            instance.getCountCandidates()
              .then((countCandidates) => {
                $(document).ready(() => {
                  $('#addCandidate').click(() => {
                    const nameCandidate = $('#name').val();
                    const partyCandidate = $('#party').val();
                    instance.addCandidate(nameCandidate, partyCandidate)
                      .then(() => {})
                      .catch((err) => console.error("Error adding candidate:", err.message));
                  });

                  $('#addDate').click(() => {
                    const startDate = Date.parse(document.getElementById("startDate").value) / 1000;
                    const endDate = Date.parse(document.getElementById("endDate").value) / 1000;
                    instance.setDates(startDate, endDate)
                      .then(() => console.log("Dates set"))
                      .catch((err) => console.error("Error setting dates:", err.message));
                  });
                });

                for (let i = 0; i < countCandidates; i++) {
                  instance.getCandidate(i + 1)
                    .then((data) => {
                      const [id, name, party, voteCount] = data;
                      const viewCandidates = `
                        <tr>
                          <td>
                            <input class="form-check-input" type="radio" name="candidate" value="${id}" id=${id}> ${name}
                          </td>
                          <td>${party}</td>
                          <td>${voteCount}</td>
                        </tr>`;
                      $("#boxCandidate").append(viewCandidates);
                    })
                    .catch((err) => console.error("Error fetching candidate:", err.message));
                }
              })
              .catch((err) => console.error("Error fetching candidates:", err.message));

            instance.checkVote()
              .then((voted) => {
                if (!voted) $("#voteButton").attr("disabled", false);
              })
              .catch((err) => console.error("Error checking vote status:", err.message));
          })
          .catch((err) => console.error("Error deploying contract:", err.message));
      })
      .catch((err) => console.error("Error requesting accounts from MetaMask:", err.message));
  },

  vote() {    
    const candidateID = $("input[name='candidate']:checked").val();
    if (!candidateID) {
      $("#msg").html("<p>Please vote for a candidate.</p>");
      return;
    }

    VotingContract.deployed()
      .then((instance) => instance.vote(parseInt(candidateID)))
      .then(() => {
        $("#voteButton").attr("disabled", true);
        $("#msg").html("<p>Voted</p>");
        window.location.reload();
      })
      .catch((err) => console.error("ERROR! " + err.message));
  }
};

// Initialize DApp
window.addEventListener("load", () => {
  if (typeof window.ethereum !== 'undefined') {
    console.warn("MetaMask is installed");

    ethereum.request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        console.log("Connected to account: " + accounts[0]);

        VotingContract.setProvider(window.ethereum);
        VotingContract.defaults({ 
          from: window.ethereum.selectedAddress, 
          gas: 6654755 
        });

        window.App.account = window.ethereum.selectedAddress;
        $("#accountAddress").html("Your Account: " + window.ethereum.selectedAddress);

        // Call eventStart after connection
        window.App.eventStart();
      })
      .catch((err) => console.error("Error connecting MetaMask:", err));
  } else {
    console.warn("MetaMask is not installed. Please install MetaMask.");
    alert("MetaMask is required to interact with the DApp");
  }
});
