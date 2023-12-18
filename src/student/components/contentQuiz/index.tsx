import { Radio, Typography } from "@material-tailwind/react";

interface Quiz{
    numberQuestion: number;
    question: string;
    alternateQuestion1: string;
    alternateQuestion2: string;
    alternateQuestion3: string;
    alternateQuestion4: string;
}

export default function ContentQuiz({numberQuestion, question, alternateQuestion1, alternateQuestion2, alternateQuestion3, alternateQuestion4}:Quiz) {
  return (
    <>
      <Typography variant="h3" className="text-limeyellow">
        Questão {numberQuestion}
      </Typography>
      <span className="text-justify text-white">
       {question}
      </span>

      <div className="flex flex-col bg-white/90 p-4 rounded-xl mt-4">
        <Radio
          name="type"
          label={alternateQuestion1}
          crossOrigin={undefined}
        />
        <Radio
          name="type"
          label={alternateQuestion2}
          crossOrigin={undefined}
        />
        <Radio
          name="type"
          label={alternateQuestion3}
          crossOrigin={undefined}
        />
        <Radio
          name="type"
          label={alternateQuestion4}
          crossOrigin={undefined}
        />
      </div>
    </>
  );
}
