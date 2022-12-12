import { AccountTransaction } from "../components/Account-transaction";
import { AccountInfo } from "../components/Profil-info";

export const Profil = () => {
    return (
    <main className="main bg-dark">
      <AccountInfo />
      <h2 className="sr-only">Accounts</h2>
      
      <AccountTransaction title="Argent Bank Checking (x8349)" amount="2,082.79" balance="Available Balance" />
      <AccountTransaction title="Argent Bank Savings (x6712)" amount="10,928.42" balance="Available Balance" />
      <AccountTransaction title="Argent Bank Credit Card (x8349)" amount="184.30" balance="Current Balance" />

    </main>
    );
}