import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { GoalForm } from './GoalForm'

describe('GoalForm', () => {
  it('빈 목표는 추가하지 않는다', async () => {
    const user = userEvent.setup()
    const onAddGoal = vi.fn()

    render(
        <GoalForm onAddGoal={onAddGoal} />
    )

    const input = screen.getByPlaceholderText(
        '새로운 목표'
    )

    const submitButton = screen.getByRole(
        'button',
        {
        name: '목표 추가',
        }
    )

    await user.click(submitButton)

    expect(onAddGoal).not.toHaveBeenCalled()
    expect(input).toHaveFocus()
  })

  it('입력한 목표를 제출하면 onAddGoal을 호출한다', async () => {
    const user = userEvent.setup()
    const onAddGoal = vi.fn()

    render(
      <GoalForm onAddGoal={onAddGoal} />
    )

    const input = screen.getByPlaceholderText(
      '새로운 목표'
    )

    const submitButton = screen.getByRole(
      'button',
      {
        name: '목표 추가',
      }
    )

    await user.type(
      input,
      'React 테스트 학습하기'
    )

    await user.click(submitButton)

    expect(onAddGoal).toHaveBeenCalledWith(
      'React 테스트 학습하기'
    )

    expect(input).toHaveValue('')
    expect(input).toHaveFocus()
  })
})