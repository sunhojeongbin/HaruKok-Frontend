import type { ICategory } from './types';

export const mockCategories: ICategory[] = [
  {
    id: 'ctg-1',
    name: '💼 업무',
    todos: [
      {
        id: 'todo-1',
        title: 'API 응답 속도 최적화',
        memo: '데이터베이스 쿼리 N+1 문제 해결 및 Redis 캐싱 전략 수립',
      },
      {
        id: 'todo-2',
        title: 'PR #234 코드 리뷰',
      },
      {
        id: 'todo-3',
        title: '프로젝트 마일스톤 회의 준비 및 분기별 목표 설정 문서 작성',
        memo: 'UI 오버플로우 테스트를 위한 긴 제목',
      },
    ],
  },
  {
    id: 'ctg-2',
    name: '📚 학습',
    todos: [
      {
        id: 'todo-4',
        title: 'TypeScript 고급 타입 학습',
        memo: 'Conditional Types, Mapped Types, Template Literal Types 정리',
      },
    ],
  },
  {
    id: 'ctg-3',
    name: '🏃 운동',
    todos: [
      {
        id: 'todo-5',
        title: '러닝 30분',
      },
      {
        id: 'todo-6',
        title: '스트레칭',
      },
    ],
  },
  {
    id: 'ctg-4',
    name: '📋 기타',
    todos: [],
  },
];
