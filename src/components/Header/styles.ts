import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 4rem;
        height: 4rem;
    }

    nav{
        display: flex;
        gap: 0.5rem;

        a{
            width: 3.25rem;
            height: 3.25rem;

            display: flex;
            justify-content: center;
            align-items: center;

            color: ${props => props.theme['gray-100']};

            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;

            &:hover {
                border-bottom: 3px solid ${props => props.theme['purple-700']};
            }

            &.active {
                color: ${props => props.theme['purple-700']};
            }
        }
    }
`