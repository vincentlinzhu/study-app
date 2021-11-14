import React from "react";
import { Link } from "react-router-dom";

export function Error404() {
  return (
    <div>
      <div class="header">
        <h1 class="error-header">404 Error: This page does not exist</h1>
      </div>
      <nav>
        <div class="nav-button">
          <Link class="navigator" to="/">
            Return Home
          </Link>
        </div>
      </nav>
      <p class="restricted-text">
        So today i was in the supermarket going to buy some cheese for the next
        week before the stores close, got 8 packages of finest Dutch. When i was
        waiting in line to pay for it a gentleman in front of me collapsed, his
        wife looked at us and said "He has Hypoglycemia, someone please bring
        something that contains sugar!!". I immediately ran to the sweets
        section, after only 1 minute of choosing since i was in a hurry, i went
        with ice-cream snickers bar and ran back to the register, with my
        trembling hands i got rid of the plastic cover, i leaned to the old
        gentleman, when he turned to me: "I know you..." he said "you are that
        guy from Twitch... Keep it, you need it more with all that salt..."
      </p>
    </div>
  );
}
