export function GoalFilter({ currentFilter, onFilterChange }) {
    return (
        <div>
            <button
                type="button"
                onClick={() => onFilterChange('all')}
                disabled={currentFilter === 'all'}
            >
                전체
            </button>

            <button
                type="button"
                onClick={() => onFilterChange('active')}
                disabled={currentFilter === 'active'}
            >
                진행중
            </button>

            <button
                type="button"
                onClick={() => onFilterChange('completed')}
                disabled={currentFilter === 'completed'}
            >
                완료
            </button>
        </div>
    )
}