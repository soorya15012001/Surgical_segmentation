import cv2
import numpy as np

def midpoint(ptA, ptB):
    return (np.round((ptA[0] + ptB[0]) * 0.5).astype(int), np.round((ptA[1] + ptB[1]) * 0.5).astype(int))


x = cv2.imread("c4.png")

x = cv2.circle(x,(137,517),10,(0,255,0),-1)
x = cv2.circle(x,(425,99),10,(0,255,0),-1)
x = cv2.circle(x,(588,205),10,(0,255,0),-1)
cv2.line(x, (137,517), (425,99), (0,255,0),thickness=3)
cv2.line(x, (425,99), (588,205), (0,255,0),thickness=3)
cv2.line(x, (588,205), (137,517), (0,255,0),thickness=3)
cv2.putText(x,"8.0 cm", midpoint((137,517), (425,99)), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 3, cv2.LINE_AA)
cv2.putText(x,"4.0 cm", midpoint((425,99), (588,205)), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 3, cv2.LINE_AA)
cv2.putText(x,"9.0 cm", midpoint((588,205), (137,517)), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 3, cv2.LINE_AA)


cv2.imshow("hello", x)
cv2.waitKey(0)
cv2.destroyAllWindows()
