import { Answer } from '../models/answer';

export class Question {
    public questionId: number;
    public examId: number;
    public topicId: number;
    public questionText: string;
    public explanationIfWrong: string;
    public vid: number;
    public status: number;
    public created: Date;
    public changed: number;

    constructor(
        pQuestionId: number,
        pExamId: number,
        pTopicId: number,
        pQuestionText: string,
        pExplanationIfWrong: string,
        pVid: number,
        pStatus: number,
        pCreated: Date,
        pChanged: number
        ) {
        this.questionId = pQuestionId;
        this.examId = pExamId;
        this.topicId = pTopicId;
        this.questionText = pQuestionText;
        this.explanationIfWrong = pExplanationIfWrong;
        this.vid = pVid;
        this.status = pStatus;
        this.created = pCreated;
        this.changed = pChanged;
    }

    public static questionFromJSON(obj: any): Question {
        return new Question(
              obj.pQuestionId // questionId
            , obj.pExamId // examId
            , obj.pTopicId // topicId
            , obj.pQuestionText // questionText
            , obj.pExplanationIfWrong // explanationIfWrong
            , obj.pVid // vid
            , obj.pStatus // status
            , obj.pCreated // created
            , obj.pChanged // changed
        );
    }
}

