import { RepositoryList } from './components/RepositoryList';
import { Counter } from './components/Counter';

import './styles/globalStyles.scss';

export const App = () => {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    );
}