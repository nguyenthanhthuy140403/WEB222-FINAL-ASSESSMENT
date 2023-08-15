document.addEventListener("DOMContentLoaded", function () {
    function createReviewCard(review) {
      const reviewCard = document.createElement("div");
      reviewCard.classList.add("review-card");
  
      const ratingStars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
      const date = new Date(review.date).toLocaleDateString();
  
      reviewCard.innerHTML = `
        <h3>${review.name}</h3>
        <p>Date: ${date}</p>
        <p>Rating: ${ratingStars}</p>
        <p>${review.review}</p>
      `;
  
      return reviewCard;
    }
  
    function generateReviewCards() {
      const reviewSection = document.querySelector(".review-cards");
      reviewSection.innerHTML = "";
  
      reviewData.forEach((review) => {
        const reviewCard = createReviewCard(review);
        reviewSection.appendChild(reviewCard);
      });
    }
  
    const addReviewForm = document.querySelector("#add-review-form");
  
    addReviewForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.querySelector("#name").value;
      const date = document.querySelector("#date").value;
      const rating = parseInt(document.querySelector("#rating").value);
      const review = document.querySelector("#review").value;
  
      reviewData.push({ name, date, rating, review });

      generateReviewCards();
  
      addReviewForm.reset();
    });

    generateReviewCards();
  });
  