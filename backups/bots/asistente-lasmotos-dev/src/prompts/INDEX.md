# Prompts Extraction Index

Generated on: **8/23/2025, 7:53:11 PM**

## Extraction Summary

| Metric | Value |
|--------|-------|
| Total Workflows | 47 |
| Workflows with Prompts | 35 |
| Total AI Prompts | 62 |
| Workflows without Prompts | 12 |

## Generated Structure

```
src/prompts/
├── Basic/
│   ├── askForUserName/
│   │   ├── GetAnswerContext_Node.prompt.2.md
│   │   └── NamePleasantries.prompt.1.md
│   ├── askForUserLocation/
│   │   ├── Acknowledgement.prompt.2.md
│   │   ├── Apologies.prompt.1.md
│   │   └── AnlyzeUserInputContext.prompt.1.md
│   ├── askForUserPhone/
│   │   └── ConfirmNumber.prompt.3.md
│   └── getPopAuthorization/
│       └── GetAnswerContext_Node.prompt.1.md
├── brilla/
│   └── askForDocument/
│       └── FindForData.prompt.4.md
├── flujos_de_credito/
│   ├── financialStudyMessage/
│   │   └── financiera_message.prompt.2.md
│   ├── askForReportedStatus/
│   │   ├── ReportedQuestion.prompt.5.md
│   │   ├── ReportedQuestion_RawVersion.prompt.1.md
│   │   └── MadeQuestion.prompt.1.md
│   └── askForJobContractType/
│       └── UnderstandAnswer.prompt.4.md
├── flujos_de_motos/
│   ├── printMotoCard/
│   │   └── PrintCard.prompt.2.md
│   ├── printMotoList/
│   │   ├── HandleUnknownOption.prompt.4.md
│   │   └── ChosenMotoMessage.prompt.1.md
│   ├── motoStyleFlow/
│   │   ├── SearchForStyle.prompt.7.md
│   │   ├── StyleMenuOffer.prompt.2.md
│   │   ├── HandleUnknownOption.prompt.4.md
│   │   └── ProvideUniqOption.prompt.2.md
│   ├── setCupoBrillaProfile/
│   │   └── SetCupoBrillaProfile.prompt.4.md
│   └── RetrieveMoto/
│       └── searchingFor.prompt.3.md
├── flujos_principales/
│   ├── creditAssessment/
│   │   ├── IsReportedAndHasCupoBrilla.prompt.2.md
│   │   └── InviteToOffice.prompt.3.md
│   ├── mainKnowledgeBase/
│   │   └── setContext.prompt.2.md
│   └── welcome/
│       ├── WelcomeMessage.prompt.3.md
│       └── DefineTransitions.prompt.1.md
├── fuentes_de_conocimiento/
│   ├── MotoKnowledgeBase/
│   │   ├── Router.prompt.1.md
│   │   ├── ChosenMotoMessage.prompt.1.md
│   │   ├── AgreementMessage.prompt.1.md
│   │   ├── SearchStyledMoto.prompt.2.md
│   │   ├── answerAsOwnBrand.prompt.1.md
│   │   ├── answerAsCompetitor.prompt.1.md
│   │   ├── RetrieveMoto1.prompt.3.md
│   │   └── RetrieveMoto2.prompt.3.md
│   ├── creditKnowledgeAnswer/
│   │   └── ClassifyCreditQuestion.prompt.1.md
│   └── locationKnowledgeBase/
│       └── Answer.prompt.1.md
├── Location/
│   ├── retrieveServiceLocation/
│   │   └── SearchThroughIA.prompt.3.md
│   ├── retrieveUserLocation/
│   │   ├── RetrieveUserLocation.prompt.1.md
│   │   ├── RetrieveUserLocation.prompt.4.md
│   │   └── ManageAnswer.prompt.1.md
│   ├── analyzeLocationUserInput/
│   │   ├── AnalyzeUserInput.prompt.3.md
│   │   └── AnalyzeUserInput.prompt.5.md
│   └── inviteToLocation/
│       └── InvitationMessage.prompt.1.md
├── Me_todo_de_compra/
│   ├── askPurchaseMethod/
│   │   └── EvaluateConfirmation.prompt.4.md
│   ├── CashPreferenceHandle/
│   │   └── InformaPreioContado.prompt.1.md
│   └── CreditPreferenceHandle/
│       └── sendMessage.prompt.1.md
├── Propuesta_de_cre_dito/
│   └── askForAssistanceChannel/
│       └── CatchAssistancePreferenceAnswer.prompt.5.md
├── Timeout/
│   └── SetTimeoutMessage.prompt.2.md
└── utils/
    ├── saveUserData/
    │   └── save_data_client.prompt.1.md
    ├── helpQuestion/
    │   ├── Exit.prompt.2.md
    │   └── help_question.prompt.1.md
    ├── farewell/
    │   └── GenerateFarewellMessage.prompt.1.md
    ├── questionWithUserName/
    │   └── BuildMessage.prompt.1.md
    ├── evaluateConfirmation/
    │   ├── EvaluateUserAnswer.prompt.4.md
    │   └── EvaluateUserAnswer.prompt.6.md
    ├── askToKnowledgeBase/
    │   ├── InterpreateQuestion.prompt.4.md
    │   ├── Answer.prompt.1.md
    │   ├── ValidateCreditProfile.prompt.1.md
    │   └── getCategorization.prompt.4.md
    └── UnderstandUserInput/
        ├── EvaluateContext.prompt.2.md
        └── Knowledge_Understanding.prompt.3.md
```

## Quick Navigation

Click on any prompt file to navigate directly:

### Timeout
*Path: `Timeout`*

**SetTimeoutMessage:** [SetTimeoutMessage.prompt.2.md](./Timeout/SetTimeoutMessage.prompt.2.md) - *untitled*

### askForUserName
*Path: `Basic/askForUserName`*

**GetAnswerContext_Node:** [GetAnswerContext_Node.prompt.2.md](./Basic/askForUserName/GetAnswerContext_Node.prompt.2.md) - *fullName, interpretedAnswerType*
**NamePleasantries:** [NamePleasantries.prompt.1.md](./Basic/askForUserName/NamePleasantries.prompt.1.md) - *pleasentriesMessage*

### askForUserLocation
*Path: `Basic/askForUserLocation`*

**Acknowledgement:** [Acknowledgement.prompt.2.md](./Basic/askForUserLocation/Acknowledgement.prompt.2.md) - *greetingMessage*
**Apologies:** [Apologies.prompt.1.md](./Basic/askForUserLocation/Apologies.prompt.1.md) - *messageResult*
**AnlyzeUserInputContext:** [AnlyzeUserInputContext.prompt.1.md](./Basic/askForUserLocation/AnlyzeUserInputContext.prompt.1.md) - *answerType*

### 💾 saveUserData
*Path: `utils/saveUserData`*

**save_data_client:** [save_data_client.prompt.1.md](./utils/saveUserData/save_data_client.prompt.1.md) - *description*

### printMotoCard
*Path: `flujos_de_motos/printMotoCard`*

**PrintCard:** [PrintCard.prompt.2.md](./flujos_de_motos/printMotoCard/PrintCard.prompt.2.md) - *title, formattedPrice*

### ⚠️ helpQuestion
*Path: `utils/helpQuestion`*

**Exit:** [Exit.prompt.2.md](./utils/helpQuestion/Exit.prompt.2.md) - *message*
**help_question:** [help_question.prompt.1.md](./utils/helpQuestion/help_question.prompt.1.md) - *message*

### MotoKnowledgeBase
*Path: `fuentes_de_conocimiento/MotoKnowledgeBase`*

**Router:** [Router.prompt.1.md](./fuentes_de_conocimiento/MotoKnowledgeBase/Router.prompt.1.md) - *answerType*
**ChosenMotoMessage:** [ChosenMotoMessage.prompt.1.md](./fuentes_de_conocimiento/MotoKnowledgeBase/ChosenMotoMessage.prompt.1.md) - *foundMessage*
**AgreementMessage:** [AgreementMessage.prompt.1.md](./fuentes_de_conocimiento/MotoKnowledgeBase/AgreementMessage.prompt.1.md) - *foundMessage*
**SearchStyledMoto:** [SearchStyledMoto.prompt.2.md](./fuentes_de_conocimiento/MotoKnowledgeBase/SearchStyledMoto.prompt.2.md) - *interpretedStyle*
**answerAsOwnBrand:** [answerAsOwnBrand.prompt.1.md](./fuentes_de_conocimiento/MotoKnowledgeBase/answerAsOwnBrand.prompt.1.md) - *foundMessage*
**answerAsCompetitor:** [answerAsCompetitor.prompt.1.md](./fuentes_de_conocimiento/MotoKnowledgeBase/answerAsCompetitor.prompt.1.md) - *foundMessage*
**RetrieveMoto1:** [RetrieveMoto1.prompt.3.md](./fuentes_de_conocimiento/MotoKnowledgeBase/RetrieveMoto1.prompt.3.md) - *interpretedMotorcycle*
**RetrieveMoto2:** [RetrieveMoto2.prompt.3.md](./fuentes_de_conocimiento/MotoKnowledgeBase/RetrieveMoto2.prompt.3.md) - *competitorReference, ownReference*

### creditAssessment
*Path: `flujos_principales/creditAssessment`*

**IsReportedAndHasCupoBrilla:** [IsReportedAndHasCupoBrilla.prompt.2.md](./flujos_principales/creditAssessment/IsReportedAndHasCupoBrilla.prompt.2.md) - *untitled*
**InviteToOffice:** [InviteToOffice.prompt.3.md](./flujos_principales/creditAssessment/InviteToOffice.prompt.3.md) - *serviceLocationInfo*

### printMotoList
*Path: `flujos_de_motos/printMotoList`*

**HandleUnknownOption:** [HandleUnknownOption.prompt.4.md](./flujos_de_motos/printMotoList/HandleUnknownOption.prompt.4.md) - *untitled*
**ChosenMotoMessage:** [ChosenMotoMessage.prompt.1.md](./flujos_de_motos/printMotoList/ChosenMotoMessage.prompt.1.md) - *untitled*

### financialStudyMessage
*Path: `flujos_de_credito/financialStudyMessage`*

**financiera_message:** [financiera_message.prompt.2.md](./flujos_de_credito/financialStudyMessage/financiera_message.prompt.2.md) - *untitled*

### 👋 farewell
*Path: `utils/farewell`*

**GenerateFarewellMessage:** [GenerateFarewellMessage.prompt.1.md](./utils/farewell/GenerateFarewellMessage.prompt.1.md) - *untitled*

### creditKnowledgeAnswer
*Path: `fuentes_de_conocimiento/creditKnowledgeAnswer`*

**ClassifyCreditQuestion:** [ClassifyCreditQuestion.prompt.1.md](./fuentes_de_conocimiento/creditKnowledgeAnswer/ClassifyCreditQuestion.prompt.1.md) - *conversationContext*

### locationKnowledgeBase
*Path: `fuentes_de_conocimiento/locationKnowledgeBase`*

**Answer:** [Answer.prompt.1.md](./fuentes_de_conocimiento/locationKnowledgeBase/Answer.prompt.1.md) - *serviceLocationInfo*

### askForDocument
*Path: `brilla/askForDocument`*

**FindForData:** [FindForData.prompt.4.md](./brilla/askForDocument/FindForData.prompt.4.md) - *expectedData*

### 👤 questionWithUserName
*Path: `utils/questionWithUserName`*

**BuildMessage:** [BuildMessage.prompt.1.md](./utils/questionWithUserName/BuildMessage.prompt.1.md) - *messageResult*

### ❔mainKnowledgeBase
*Path: `flujos_principales/mainKnowledgeBase`*

**setContext:** [setContext.prompt.2.md](./flujos_principales/mainKnowledgeBase/setContext.prompt.2.md) - *typeContext*

### retrieveServiceLocation
*Path: `Location/retrieveServiceLocation`*

**SearchThroughIA:** [SearchThroughIA.prompt.3.md](./Location/retrieveServiceLocation/SearchThroughIA.prompt.3.md) - *serviceLocation, outOfServiceRange*

### ❓ evaluateConfirmation
*Path: `utils/evaluateConfirmation`*

**EvaluateUserAnswer:**
- [EvaluateUserAnswer.prompt.4.md](./utils/evaluateConfirmation/EvaluateUserAnswer.prompt.4.md) - *confirmationType*
- [EvaluateUserAnswer.prompt.6.md](./utils/evaluateConfirmation/EvaluateUserAnswer.prompt.6.md) - *answerType*


### askForUserPhone
*Path: `Basic/askForUserPhone`*

**ConfirmNumber:** [ConfirmNumber.prompt.3.md](./Basic/askForUserPhone/ConfirmNumber.prompt.3.md) - *phoneInvalid*

### getPopAuthorization
*Path: `Basic/getPopAuthorization`*

**GetAnswerContext_Node:** [GetAnswerContext_Node.prompt.1.md](./Basic/getPopAuthorization/GetAnswerContext_Node.prompt.1.md) - *popAuthorized, answerType*

### motoStyleFlow
*Path: `flujos_de_motos/motoStyleFlow`*

**SearchForStyle:** [SearchForStyle.prompt.7.md](./flujos_de_motos/motoStyleFlow/SearchForStyle.prompt.7.md) - *motoList*
**StyleMenuOffer:** [StyleMenuOffer.prompt.2.md](./flujos_de_motos/motoStyleFlow/StyleMenuOffer.prompt.2.md) - *stlyeMenuOfferMessage*
**HandleUnknownOption:** [HandleUnknownOption.prompt.4.md](./flujos_de_motos/motoStyleFlow/HandleUnknownOption.prompt.4.md) - *interestedMotoReference*
**ProvideUniqOption:** [ProvideUniqOption.prompt.2.md](./flujos_de_motos/motoStyleFlow/ProvideUniqOption.prompt.2.md) - *resultMessage*

### retrieveUserLocation
*Path: `Location/retrieveUserLocation`*

**RetrieveUserLocation:**
- [RetrieveUserLocation.prompt.1.md](./Location/retrieveUserLocation/RetrieveUserLocation.prompt.1.md) - *messageResult*
- [RetrieveUserLocation.prompt.4.md](./Location/retrieveUserLocation/RetrieveUserLocation.prompt.4.md) - *greetingMessage*

**ManageAnswer:** [ManageAnswer.prompt.1.md](./Location/retrieveUserLocation/ManageAnswer.prompt.1.md) - *location, answerType*

### analyzeLocationUserInput
*Path: `Location/analyzeLocationUserInput`*

**AnalyzeUserInput:**
- [AnalyzeUserInput.prompt.3.md](./Location/analyzeLocationUserInput/AnalyzeUserInput.prompt.3.md) - *location*
- [AnalyzeUserInput.prompt.5.md](./Location/analyzeLocationUserInput/AnalyzeUserInput.prompt.5.md) - *serviceLocation*


### inviteToLocation
*Path: `Location/inviteToLocation`*

**InvitationMessage:** [InvitationMessage.prompt.1.md](./Location/inviteToLocation/InvitationMessage.prompt.1.md) - *untitled*

### ✨ askToKnowledgeBase
*Path: `utils/askToKnowledgeBase`*

**InterpreateQuestion:** [InterpreateQuestion.prompt.4.md](./utils/askToKnowledgeBase/InterpreateQuestion.prompt.4.md) - *interpretedInput*
**Answer:** [Answer.prompt.1.md](./utils/askToKnowledgeBase/Answer.prompt.1.md) - *answerMessage*
**ValidateCreditProfile:** [ValidateCreditProfile.prompt.1.md](./utils/askToKnowledgeBase/ValidateCreditProfile.prompt.1.md) - *context*
**getCategorization:** [getCategorization.prompt.4.md](./utils/askToKnowledgeBase/getCategorization.prompt.4.md) - *conversationContext*

### 🧠 UnderstandUserInput
*Path: `utils/UnderstandUserInput`*

**EvaluateContext:** [EvaluateContext.prompt.2.md](./utils/UnderstandUserInput/EvaluateContext.prompt.2.md) - *context, expectedData*
**Knowledge_Understanding:** [Knowledge_Understanding.prompt.3.md](./utils/UnderstandUserInput/Knowledge_Understanding.prompt.3.md) - *correctedUserInput*

### askForAssistanceChannel
*Path: `Propuesta_de_cre_dito/askForAssistanceChannel`*

**CatchAssistancePreferenceAnswer:** [CatchAssistancePreferenceAnswer.prompt.5.md](./Propuesta_de_cre_dito/askForAssistanceChannel/CatchAssistancePreferenceAnswer.prompt.5.md) - *userAnswerContext*

### askForReportedStatus
*Path: `flujos_de_credito/askForReportedStatus`*

**ReportedQuestion:** [ReportedQuestion.prompt.5.md](./flujos_de_credito/askForReportedStatus/ReportedQuestion.prompt.5.md) - *untitled*
**ReportedQuestion_RawVersion:** [ReportedQuestion_RawVersion.prompt.1.md](./flujos_de_credito/askForReportedStatus/ReportedQuestion_RawVersion.prompt.1.md) - *negativeCreditReport*
**MadeQuestion:** [MadeQuestion.prompt.1.md](./flujos_de_credito/askForReportedStatus/MadeQuestion.prompt.1.md) - *userReportedQuestion*

### askForJobContractType
*Path: `flujos_de_credito/askForJobContractType`*

**UnderstandAnswer:** [UnderstandAnswer.prompt.4.md](./flujos_de_credito/askForJobContractType/UnderstandAnswer.prompt.4.md) - *jobContractType*

### askPurchaseMethod
*Path: `Me_todo_de_compra/askPurchaseMethod`*

**EvaluateConfirmation:** [EvaluateConfirmation.prompt.4.md](./Me_todo_de_compra/askPurchaseMethod/EvaluateConfirmation.prompt.4.md) - *purchasePreference*

### CashPreferenceHandle
*Path: `Me_todo_de_compra/CashPreferenceHandle`*

**InformaPreioContado:** [InformaPreioContado.prompt.1.md](./Me_todo_de_compra/CashPreferenceHandle/InformaPreioContado.prompt.1.md) - *untitled*

### ⭐️ welcome
*Path: `flujos_principales/welcome`*

**WelcomeMessage:** [WelcomeMessage.prompt.3.md](./flujos_principales/welcome/WelcomeMessage.prompt.3.md) - *fullName, welcomeMessage*
**DefineTransitions:** [DefineTransitions.prompt.1.md](./flujos_principales/welcome/DefineTransitions.prompt.1.md) - *transition*

### setCupoBrillaProfile
*Path: `flujos_de_motos/setCupoBrillaProfile`*

**SetCupoBrillaProfile:** [SetCupoBrillaProfile.prompt.4.md](./flujos_de_motos/setCupoBrillaProfile/SetCupoBrillaProfile.prompt.4.md) - *alertMessage*

### CreditPreferenceHandle
*Path: `Me_todo_de_compra/CreditPreferenceHandle`*

**sendMessage:** [sendMessage.prompt.1.md](./Me_todo_de_compra/CreditPreferenceHandle/sendMessage.prompt.1.md) - *purchaseMethodInfoMessage*

### 🏍️ RetrieveMoto
*Path: `flujos_de_motos/RetrieveMoto`*

**searchingFor:** [searchingFor.prompt.3.md](./flujos_de_motos/RetrieveMoto/searchingFor.prompt.3.md) - *interestedProduct*

## Workflows Without AI Prompts

These workflows were processed but contained no AI prompt instructions:

- **Error** (`Error`)
- **Conversation End** (`Conversation_End`)
- **Main** (`Main`)
- **productDetailsFollowUp** (`flujos_de_motos/productDetailsFollowUp`)
- **askForCreditInterest** (`Propuesta_de_cre_dito/askForCreditInterest`)
- **User Info Form** (`flujos_principales/User_Info_Form`)
- **setConversationContext** (`utils/setConversationContext`)
- **requestInterestedMoto** (`flujos_de_motos/requestInterestedMoto`)
- **creditProposal** (`flujos_principales/creditProposal`)
- **askIfUserHasCupoBrilla** (`flujos_de_credito/askIfUserHasCupoBrilla`)
- **askForNationalId** (`brilla/askForNationalId`)
- **askForBillNumber** (`brilla/askForBillNumber`)

---

*This index was automatically generated by the bot-prompt-extractor utility.*
