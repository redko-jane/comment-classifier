export type Sentiment = 'positive' | 'negative';

export interface CommentRecord {
  id: number;
  text: string;
  sentiment: Sentiment;
  confidence: number;
  createdAt: string;
}

export const mockComments: CommentRecord[] = [
  {
    id: 1,
    text: 'Отличный сервис, всё быстро и удобно. Обязательно вернусь ещё!',
    sentiment: 'positive',
    confidence: 0.94,
    createdAt: '2026-09-22T14:15:00',
  },
  {
    id: 2,
    text: 'Ужасное качество, заказ пришёл с браком. Больше не буду заказывать.',
    sentiment: 'negative',
    confidence: 0.89,
    createdAt: '2026-09-21T10:03:00',
  },
  {
    id: 3,
    text: 'В целом нормально, но доставка задержалась на два дня.',
    sentiment: 'negative',
    confidence: 0.62,
    createdAt: '2026-09-20T18:47:00',
  },
  {
    id: 4,
    text: 'Спасибо за оперативную поддержку, вопрос решили за пять минут.',
    sentiment: 'positive',
    confidence: 0.97,
    createdAt: '2026-09-19T09:30:00',
  },
];