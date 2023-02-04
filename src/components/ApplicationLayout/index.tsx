import React, { ReactNode, useContext } from "react"
import 'antd/dist/antd.css';
import Link from "next/link";
import { Button } from 'antd'
import { HomeFilled, ScheduleFilled, IdcardFilled, MedicineBoxFilled } from '@ant-design/icons'
import Logo from '../../assets/medical-fake-v1-w-200px.svg'
import Symbol from '../../assets/medical-fake-v3-symbol.svg'
import { AuthContext } from "../../context/AuthContext";
import UserDropdown from "../UserDropdown"
import { GlobalContainer, HeaderContainer, ContentContainer, MenuContainer, FooterContainer, FooterContent } from '../../styles/layout/styles'
import { ContainerUserDropdown } from '../../styles/components/UserDropdown/styles'

interface ApplicationLayoutProps {
  children: ReactNode
}

export default function ApplicationLayout ({children}:ApplicationLayoutProps) {

  const { user } = useContext(AuthContext)

  return (
    <GlobalContainer>
      { user && (
        <HeaderContainer>
          <Logo />
            <MenuContainer>
              <Link href={'/'}>
                <Button type="link" icon={<HomeFilled style={{fontSize: "18px"}} />} >
                  Home
                </Button>
              </Link>
              <Link href={'/appointment-schedule'}>
                <Button type="link" icon={<ScheduleFilled style={{fontSize: "18px"}} />}>
                  Agenda de consultas
                </Button>
              </Link>
              <Link href={'/PatientList'}>
                <Button type="link" icon={<IdcardFilled style={{fontSize: "18px"}} />}>
                  Lista de pacientes
                </Button>
              </Link>
              <Link href={'/DoctorsList'}>
                <Button type="link" icon={<MedicineBoxFilled style={{fontSize: "18px"}} />}>
                  Lista de médicos
                </Button>
              </Link>
            </MenuContainer>
            <ContainerUserDropdown>
              <UserDropdown />
            </ContainerUserDropdown>
        </HeaderContainer>
      )}

      <ContentContainer>
          {children}
      </ContentContainer>

      <FooterContainer>
        <FooterContent>
          <Symbol style={{marginBottom: "10px"}}/>
          <h5>Projeto para Portfólio</h5>
          <h5>Desenvolvido por Everton Luis da Silva - Contato: +55 11 98291-6159</h5>
        </FooterContent>
      </FooterContainer>
    </GlobalContainer>
  )
}
