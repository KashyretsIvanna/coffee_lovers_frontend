import { lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Route, Routes } from 'react-router-dom';
import { Container } from '@freelance/components';
import ChooseRole from '@pages/ChooseRolePage';
import FindJobs from '@pages/FindJobs';
import JobOwnerDashboard from '@pages/JobOwnerDashboard';
import PasswordReset from '@pages/PasswordReset';
import PasswordResetRequest from '@pages/PasswordResetRequest';
import ProfileQuestions1 from '@pages/ProfileQuestions1';
import ProfileQuestions2 from '@pages/ProfileQuestions2';
import WelcomePage from '@pages/WelcomePage';
import PrivateRoute from 'src/Routes/PrivateRoute';
import PublicRoute from 'src/Routes/PublicRoute';

const ExampleRootPage = lazy(
  () =>
    import(
      /* webpackChunkName: "ExampleRootPage" */ '../pages/ExampleRootPage'
    ),
);

const OwnerProfilePage = lazy(
  () =>
    import(
      /* webpackChunkName: "OwnerProfilePage" */ '../pages/OwnerProfilePage'
    ),
);
const SignInGoogle = lazy(() => import('../pages/SignInGoogle'));
const ConditionsPage = lazy(() => import('../pages/ConditionsPage'));

const JobPostPage = lazy(
  () => import(/* webpackChunkName: "JobPostPage" */ '../pages/JobPostPage'),
);

const LoginPage = lazy(
  () => import(/* webpackChunkName: "ExampleRootPage" */ '../pages/LoginPage'),
);
const SignupPage = lazy(
  () => import(/* webpackChunkName: "ExampleRootPage" */ '../pages/SignupPage'),
);

export function App() {
  const { t } = useTranslation();

  return (
    <Container>
      <Routes>
        <Route path="/" element={<ExampleRootPage />} />
        <Route
          path="/owner-profile"
          element={
            <PrivateRoute>
              <OwnerProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/owner-profile/job-post"
          element={
            <PrivateRoute>
              <JobPostPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/page-2"
          element={<Link to="/">{t('router.toRoot')}</Link>}
        />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/googleAuth" element={<SignInGoogle />} />
        <Route path="/login/conditions" element={<ConditionsPage />} />
        <Route
          path="/profile-questions-1"
          element={
            <PrivateRoute>
              <ProfileQuestions1 />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile-questions-2"
          element={
            <PrivateRoute>
              <ProfileQuestions2 />
            </PrivateRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/passwordreset"
          element={
            <PublicRoute>
              <PasswordResetRequest />
            </PublicRoute>
          }
        />
        <Route
          path="/passwordreset/:key"
          element={
            <PublicRoute>
              <PasswordReset />
            </PublicRoute>
          }
        />
        <Route
          path="/jobownerdashboard"
          element={
            <PrivateRoute>
              <JobOwnerDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/role"
          element={
            <PrivateRoute>
              <ChooseRole />
            </PrivateRoute>
          }
        />
        <Route
          path="/findjobs"
          element={
            <PrivateRoute>
              <FindJobs />
            </PrivateRoute>
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
