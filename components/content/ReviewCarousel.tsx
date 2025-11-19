import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Andrew Sharpe",
    date: "1 month ago",
    rating: 5,
    text: "Ziggy did an excellent job inspecting my AC system. He was very thorough in checking everything and made sure to explain what he was doing along the way. His communication was clear and professional throughout the process.",
  },
  {
    id: 2,
    author: "Norman",
    date: "1 week ago",
    rating: 5,
    text: "Tyler Manley did an outstanding job installing the Brita Pro water softener and water purifier systems at our home. All the work was planned and executed in a professional and efficient manner. The workmanship is excellent.",
  },
  {
    id: 3,
    author: "Josh",
    date: "4 months ago",
    rating: 5,
    text: "Our technician was David Ross. He was super helpful and knowledgeable. Professional and informative with what he was going to be doing. They don't try to upsell you or recommend you to change extra parts that weren't necessary.",
  },
];

export default function ReviewCarousel() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied Tucson homeowners
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="p-6 md:p-8 bg-background"
              data-testid={`card-review-${review.id}`}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground mb-4 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author & Date */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{review.author}</span>
                <span>{review.date}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            See all <span className="font-bold text-foreground">22,000+ five-star reviews</span> across multiple platforms
          </p>
          <a
            href="https://maps.app.goo.gl/eLz89dNv9q3MdQ9s8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover-elevate px-4 py-2 rounded-md font-semibold transition-colors"
            data-testid="link-google-reviews"
          >
            View Google Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
