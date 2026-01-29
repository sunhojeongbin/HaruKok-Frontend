import type { ITodo } from './types';

export const mockTodos: ITodo[] = [
  {
    id: 'todo-1',
    categoryId: 'ctg-1',
    title: 'API 응답 속도 최적화',
    date: '2026-01-30',
    memo: '데이터베이스 쿼리 N+1 문제 해결 및 Redis 캐싱 전략 수립',
  },
  {
    id: 'todo-2',
    categoryId: 'ctg-1',
    title: 'PR #234 코드 리뷰',
    date: '2026-01-30',
  },
  {
    id: 'todo-3',
    categoryId: 'ctg-1',
    title: '프로젝트 마일스톤 회의 준비 및 분기별 목표 설정 문서 작성',
    date: '2026-01-30',
    memo: 'UI 오버플로우 테스트를 위한 긴 제목',
  },
  {
    id: 'todo-4',
    categoryId: 'ctg-2',
    title: 'TypeScript 고급 타입 학습',
    date: '2026-01-30',
    memo: 'Conditional Types, Mapped Types, Template Literal Types 정리',
  },
  {
    id: 'todo-5',
    categoryId: 'ctg-3',
    title: '러닝 30분',
    date: '2026-01-30',
  },
  {
    id: 'todo-6',
    categoryId: 'ctg-3',
    title: '스트레칭',
    date: '2026-01-30',
  },
];
