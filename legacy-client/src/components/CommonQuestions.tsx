import { HelpCircle } from 'lucide-react';

export interface CommonQuestion {
  question: string;
  answer: string;
}

interface CommonQuestionsProps {
  questions: CommonQuestion[];
  title?: string;
}

export function CommonQuestions({ questions, title = "Common Questions" }: CommonQuestionsProps) {
  if (!questions || questions.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-muted/30" data-testid="section-common-questions">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-8 h-8 text-primary" data-testid="icon-help" />
          <h2 className="text-3xl font-bold" data-testid="heading-common-questions">{title}</h2>
        </div>
        
        <div className="space-y-6" data-testid="container-questions">
          {questions.map((item, index) => (
            <div key={index} className="space-y-2" data-testid={`question-item-${index}`}>
              <h3 className="text-xl font-semibold text-foreground" data-testid={`question-text-${index}`}>
                {item.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`answer-text-${index}`}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
